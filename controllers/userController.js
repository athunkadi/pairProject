const { User, Game } = require("../models");

class UserController {
  static index(req, res) {
    User.findAll({
      order: [["id", "Asc"]],
    })
      .then((data) => {
        data.forEach((x) => {
          x.dontShowEmail();
        });
        res.render("listUser", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static addForm(req, res) {
    res.render("addUser");
  }

  static addUser(req, res) {
    let obj = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
    };

    User.create(obj)
      .then((data) => {
        res.redirect("/users");
      })
      .catch((err) => {
        let errors = [];
        err.errors.forEach((x) => {
          errors.push(x.message);
        });
        res.send(errors);
      });
  }

  static editForm(req, res) {
    const id = +req.params.id;

    User.findOne({ where: { id: id } })
      .then((data) => {
        res.render("editUser", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static editUser(req, res) {
    const id = +req.params.id;

    let obj = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
    };

    User.update(obj, { where: { id: id } })
      .then((data) => {
        res.redirect("/users");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = +req.params.id;
    User.destroy({ where: { id: `${id}` } })
      .then((data) => {
        res.redirect("/users");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static showOrders(req, res) {
    const id = +req.params.id;

    User.findByPk(id, {
      include: Game,
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = UserController;
