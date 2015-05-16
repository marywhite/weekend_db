var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
  if(req.isAuthenticated())
    res.sendFile(path.resolve(__dirname, '../views/users.html'));
});

module.exports = router;
