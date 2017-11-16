var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

router.post('/', function(req, res){
    User.findOne({
        username: req.body.username
    }, function(err, user){
        if (err) throw err;

        if (!user){
            res.json({
                success: false, 
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {
            if (user.password != req.body.password){
                res.json({
                    success: false, 
                    message: 'Authentication failed. Wrong password.'
                });
            } else {
                const payload = {
                    hotelOwner: user.hotelOwner
                };
    
                var token = jwt.sign(payload, config.secret, {
                    expiresIn: '24h'
                });
    
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    });
});

module.exports = router;