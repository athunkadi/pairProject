const UserController = require('../controllers/userController');

const routerUser = require('express').Router();

routerUser.get("/", UserController.index);
routerUser.get("/add", UserController.addForm);
routerUser.post("/add", UserController.addUser);
routerUser.get("/:id/edit", UserController.editForm);
routerUser.post("/:id/edit", UserController.editUser);
routerUser.post("/:id/delete", UserController.delete);


module.exports = routerUser