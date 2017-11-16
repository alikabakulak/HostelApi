var express = require('express');
var router = express.Router();
var users = require('../models/user');

router.post('/user', function(req,res){
    users.create({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        reservation: [{

        }],
        phone: req.body.phone,
        hotelOwner: req.body.hotelOwner
    }, function(err, response){
        res.json({err:err, response:response});
    });
});

router.post('/create', function(req, res){
    Hotel.create({
        name: req.body.name,
        username: req.body.username,
        address: [{
            city: req.body.city,
            town: req.body.town,
            detail: req.body.detail
        }],
        contact: req.body.contact,
        info: req.body.info,
        rooms: [{

        }],
        rating: req.body.rating
    }, function(err, response) {
        res.json({err:err, response:response});
    });
});

module.exports = router;