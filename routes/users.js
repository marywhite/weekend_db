var express = require('express');
var router = express.Router();
var path = require('path');
var user = require('../models/user');


router.get('/', ensureAuthenticated,
    function(req,res) {
        res.sendFile(path.resolve(__dirname, '../views/users.html'));
    }
);

router.get('/show', ensureAuthenticated,
    function(req, res, next){
        user.find({}, "name username", function (err, users) {
          if (err) return next(err);
          res.json(users);
        });
});

function ensureAuthenticated(req,res,next) {
    if(req.isAuthenticated())
    {return next();}
    console.log('invalid credentials'); // if failed...
    res.redirect('/')
}

module.exports = router;
