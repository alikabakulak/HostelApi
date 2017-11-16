const mongoose = require('mongoose');
const uuid = require('uuid').v4;

var addressSchema = new mongoose.Schema({
    city: String,
    town: String,
    detail: String
});

var hotelSchema = new mongoose.Schema({
    id: {type: String, default: function genUUID(){
        uuid.v4()
    }},
    name: {type: String},
    username: {type: String},
    address: {type: [addressSchema]},
    contact: {type: String},
    info: {type: String},
    rooms: {type: []},
    rating: {type: Number}
});

module.exports = mongoose.model('Hotel', hotelSchema);