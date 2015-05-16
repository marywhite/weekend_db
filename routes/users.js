var express = require('express');
var router = express.Router();
var path = require('path');
var user = require('../models/user');


router.get('/', ensureAuthenticated,
    function(req,res) {
        //console.log(req.session.passport.user);
        res.sendFile(path.resolve(__dirname, '../views/users.html'));
    }
);


router.get('/hello', function(req, res, next) {
    res.json(req.session.passport.user);
});

/* GET by ID*/
router.get('/hello/:id', function(req, res, next) {
    user.findById(req.params.id, function (err, username) {
        if (err) return next(err);
        res.send(username.username);
    });
});


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
    console.log('invalid credentials');
    res.redirect('/')
}

module.exports = router;
