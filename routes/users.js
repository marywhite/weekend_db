var express = require('express');
var router = express.Router();
var path = require('path');
var user = require('../models/user');

router.get('/', function(req, res, next) {
  if(req.isAuthenticated())
    res.sendFile(path.resolve(__dirname, '../views/users.html'));
});

router.get('/show', function(req, res, next){
  user.find({}, "username"
      ,function (err, users) {
        if (err) return next(err);
        res.json(users);
      });
});

module.exports = router;
