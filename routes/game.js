const GameController = require('../controllers/gameController');

const routerGame = require('express').Router();

routerGame.get('/', GameController.index);
routerGame.get('/add', GameController.addForm);
routerGame.post('/add', GameController.addGame);
routerGame.get('/:id/edit', GameController.editForm);
routerGame.post('/:id/edit', GameController.editGame);
routerGame.post('/:id/delete', GameController.delete);

module.exports = routerGame;