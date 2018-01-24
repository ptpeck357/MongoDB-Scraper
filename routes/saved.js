var path = require("path");
var express = require("express");
var router = express.Router();
// var db = require("../models");

router.get('/saved', function(req, res) {
    res.render('saved');
});

module.exports = router;