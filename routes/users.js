const express = require('express');
const router  = express.Router();
const User = require('../models/users');


/* GET user list */
router.get('/', (req, res, next) => {
  User.find()
  .then(users => {
    res.render('users', {liste: users});
  })
});


router.post('/', (req, res, next) => {
  User.find({ username: {$regex : "^" + req.body.search}})
  .then(users => {
    res.send({liste: users});
  })
});

module.exports = router;
