const router = require('express').Router();
const users = require('./userController.js');

router.get('/users/',users.getAll);

router.get('/users/:id', users.getOne);

router.put('/users/:id', users.updateOne)

module.exports = router;