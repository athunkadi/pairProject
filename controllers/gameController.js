const { Game } = require('../models');

class GameController {

  static index(req, res){
    // res.render('listGame');
    Game.findAll()
      .then(data => {
        res.render('listGame', { data });
      })
      .catch(err => {
        res.send(err);
      })
  }

  static addForm(req, res){
    res.render('addGame');
  }

  static addGame(req, res){
    res.send(req.body);
    let obj = {
      name: req.body.name,
      stock: req.body.stock,
      image: req.body.image,
      price: req.body.price,
      //kalo ga dipake jangan lupa dihapus
      serial_code: req.body.serial_code
    }

    Game.create(obj)
      .then(data => {
        res.redirect('/games');
      })
      .catch(err => {
        res.send(err);
      })
  }

  static editForm(req, res){
    // res.send('form edit games');
    const id = +req.params.id;

    Game.findOne({ where: {'id': id}})
      .then(data => {
        res.render('editGame', { data });
      })
      .catch(err => {
        res.send(err);
      })
  }

  static editGame(req, res){
    // res.send('edit games');
    const id = +req.params.id;

    let obj = {
      name: req.body.name,
      stock: req.body.stock,
      image: req.body.image,
      price: req.body.price,
      //kalo ga dipake jangan lupa dihapus
      serial_code: req.body.serial_code
    }

    Game.update(obj, {where : {'id' : id}})
      .then(data => {
        res.redirect('/games');
      })
      .catch(err => {
        res.send(err);
      })
  }

  static delete(req, res){
    const id = +req.params.id;
    Game.destroy({where: {'id': `${id}`}})
    .then(data => {
      res.redirect('/games');
    })
    .catch(err => {
      res.send(err);
    })
  }

}

module.exports = GameController;