var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//creating routes 
router.get('/', function (req, res){
    res.redirect('/burgers');
});

//index
router.get('/burgers', function(req, res){
    burger.selectAll(function(data){
        var hbsObj = { burger_data: burgerData};

        res.render('index', hbsObj);
    });
});

//newBurg
router.post('/burger/create', function (req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect('/');
    });
  });

//eating
router.put('/burgers/:id', function(reqq, res){
    burger.updateOne(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
    });
});

//exporting
module.exports = router;