var passport = require('passport');
var config = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
const Client = require('../models/client');

router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    User.find(function (err, users) {
      if (err) return next(err);
      res.json(users);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.get('/:id', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  var token = getToken(req.headers);
  if (token) {
    User.findById(req.params.id, function (err, user) {
      if (err) return next(err);
      console.log(user.post);
      Client.findOne({_id: user.post}).exec(function (err, post) {
        if (err) return next(err);
        console.log(post);
        res.json([user, post]);
      });
      
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

router.post('/', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  User.create(req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

router.put('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

router.delete('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

getToken = function (headers) {
if (headers && headers.authorization) {
  var parted = headers.authorization.split(' ');
  if (parted.length === 2) {
    return parted[1];
  } else {
    return null;
  }
} else {
  return null;
}
};

module.exports = router;