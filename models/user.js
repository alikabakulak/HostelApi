const mongoose = require('mongoose');
const uuid = require('uuid').v4;

var reservationSchema = new mongoose.Schema({
    date: Date,
    room: String
});

var userSchema = new mongoose.Schema({
    id: {type: String, default: function genUUID(){
        uuid.v4()
    }},
    username: String,
    password: String,
    name: String,
    surname: String,
    email: String,
    reservation: [reservationSchema],
    phone: String,
    hotelOwner: Boolean
});

module.exports = mongoose.model('User', userSchema);