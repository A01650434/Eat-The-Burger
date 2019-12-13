var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//creating routes 
router.get('/', function (req, res){
    res.redirect('/index');
});

//index
router.get('/index', function(req, res){
    burger.selectAll(function(data){
        var hbsObj = { burgers: data};

        res.render('index', hbsObj);
    });
});

//newBurg
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
      res.redirect('/index');
    });
  });

//eating
router.post('/burger/eat/:id', function(reqq, res){
    burger.updateOne(req.params.id, function(){
        res.redirect('/index');
    });
});

//exporting
module.exports = router;