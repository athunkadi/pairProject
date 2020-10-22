const { Game } = require("../models");
const Helper = require("../helpers/helper");

class GameController {
  static index(req, res) {
    // res.render('listGame');
    Game.findAll({
      order: [["id", "Asc"]],
    })
      .then((data) => {
        res.render("listGame", { data, Helper });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static addForm(req, res) {
    res.render("addGame");
  }

  static addGame(req, res) {
    let obj = {
      name: req.body.name,
      stock: req.body.stock,
      image: req.body.image,
      price: req.body.price,
    };

    Game.create(obj)
      .then((data) => {
        res.redirect("/games");
      })
      .catch((err) => {
        let errors = err.errors.map((x) => {
          return x.message;
        });
        res.send(errors);
      });
  }

  static editForm(req, res) {
    // res.send('form edit games');
    const id = +req.params.id;

    Game.findOne({ where: { id: id } })
      .then((data) => {
        res.render("editGame", { data });
      })
      .catch((err) => {
        let errors = err.errors.map((x) => {
          return x.message;
        });
        res.send(errors);
      });
  }

  static editGame(req, res) {
    // res.send('edit games');
    const id = +req.params.id;

    let obj = {
      name: req.body.name,
      stock: req.body.stock,
      image: req.body.image,
      price: req.body.price,
      serial_code: req.body.serial_code,
    };

    Game.update(obj, { where: { id: id } })
      .then((data) => {
        res.redirect("/games");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = +req.params.id;
    Game.destroy({ where: { id: id } })
      .then((data) => {
        res.redirect("/games");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static buy(req, res) {
    const id = +req.params.id;
    Game.decrement("stock", {
      where: {
        id: id,
      },
    })
      .then((data) => {
        res.redirect("/games");
      })
      .catch((err) => {
        res.send(err.message);
      });
  }
}

module.exports = GameController;
