var express = require('express');
var router = express.Router();
var Client = require("../../client/src/components/client/client.model");
var Order = require(".../../client/src/components/order/order.model");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/client', function(req, res, next) {
  Client.find(function (err, clients) {
    if (err) return next(err);
    res.json(clients);
  });
});

router.get('/order', function(req, res, next) {
  Order.find(function (err, orders) {
    if (err) return next(err);
    res.json(orders);
  });
});

router.get('/byclient/:id', function(req, res, next) {
  Order.find({client: req.params.id}, function (err, orders) {
    if (err) return next(err);
    res.json(orders);
  });
});

router.get('/order/:id', function(req, res, next) {
  Order.findById(req.params.id, function (err, order) {
    if (err) return next(err);
    res.json(order);
  });
});

module.exports = router;
