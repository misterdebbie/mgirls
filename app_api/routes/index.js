var express = require('express');
var router = express.Router();
var ctrlUsers = require('../controllers/users');

// users
router.get('/users', ctrlUsers.displayAll);
router.post('/users', ctrlUsers.usersCreate);
router.get('/users/:userid', ctrlUsers.userReadOne);
router.put('/users/:userid', ctrlUsers.userUpdateOne);
router.delete('/users/:userid', ctrlUsers.userDeleteOne);

module.exports = router;
