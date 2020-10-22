const { User } = require('../models');

class UserController {

  static index(req, res){
    User.findAll()
      .then(data => {
        res.render('listUser', { data })
      })
      .catch(err => {
        res.send(err);
      })
  }

  static addForm(req, res){
    res.render('addUser');
  }

  static addUser(req, res){
    res.send(req.body);
    let obj = {
      name: req.body.name,
      username: req.body.username,
      paasword: req.body.paasword,
      email: req.body.email,
      role: req.body.role //kalo ga dipake hapus aja
    }

    User.create(obj)
      .then(data => {
        res.redirect('/users');
      })
      .catch(err => {
        res.send(err);
      })
  }

  static editForm(req, res){
    const id = +req.params.id;

    User.findOne({ where: {'id': id}})
      .then(data => {
        res.render('editUser', { data });
      })
      .catch(err => {
        res.send(err);
      })
  }

  static editUser(req, res){
    const id = +req.params.id;

    let obj = {
      name: req.body.name,
      username: req.body.username,
      paasword: req.body.paasword,
      email: req.body.email,
      role: req.body.role //kalo ga dipake hapus aja
    }

    User.update(obj, {where : {'id' : id}})
      .then(data => {
        res.redirect('/users');
      })
      .catch(err => {
        res.send(err);
      })

  }

  static delete(req, res){
    const id = +req.params.id;
    User.destroy({where: {'id': `${id}`}})
    .then(data => {
      res.redirect('/users');
    })
    .catch(err => {
      res.send(err);
    })
  }
}

module.exports = UserController