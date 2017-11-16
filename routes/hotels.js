var express = require('express');
var router = express.Router();
var Hotel = require('../models/hotel');

router.get('/', function(req, res){
    Hotel.find(function(err, hotels){
        if(err){
            res.json({message: 'An error occured!'});
        }
        res.json(hotels);
    });
});

module.exports = router;