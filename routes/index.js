const Controller = require('../controllers/controller');
const routerGame = require('./game');
const routerUser = require('./user');

const router = require('express').Router();

router.get('/', Controller.index);
router.use('/games', routerGame);
router.use('/users', routerUser);

module.exports = router;