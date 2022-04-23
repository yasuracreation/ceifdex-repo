const express = require('express');
const router = express.Router();
const pendingItems = require('../resources/pending.json');
const compliteItems = require('../resources/completed.json');

/* GET users listing. */
router.get('/pending', function(req, res, next) {
  res.send(pendingItems);
});
router.get('/complite', function(req, res, next) {
    res.send(compliteItems);
  });
  
module.exports = router;