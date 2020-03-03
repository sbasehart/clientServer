var passport = require('passport');
var config = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Client = require("../models/client");

router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Client.find(function (err, clients) {
      if (err) return next(err);
      res.json(clients);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.get('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  Client.findById(req.params.id, function (err, client) {
    if (err) return next(err);
    res.json(client);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

router.post('/', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  Client.create(req.body, function (err, client) {
    if (err) return next(err);
    res.json(client);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

router.put('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  Client.findByIdAndUpdate(req.params.id, req.body, function (err, client) {
    if (err) return next(err);
    res.json(client);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

router.delete('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  Client.findByIdAndRemove(req.params.id, req.body, function (err, client) {
    if (err) return next(err);
    res.json(client);
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