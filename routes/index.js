var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const currentUser = req.user;
  res.render('index', { currentUser });
});

module.exports = router;
