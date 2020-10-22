const GameController = require("../controllers/gameController");

const routerGame = require("express").Router();

routerGame.get("/", GameController.index);
routerGame.get("/add", GameController.addForm);
routerGame.post("/add", GameController.addGame);
routerGame.get("/:id/edit", GameController.editForm);
routerGame.post("/:id/edit", GameController.editGame);
routerGame.get("/:id/delete", GameController.delete);
routerGame.get("/:id/buy", GameController.buy);

module.exports = routerGame;
