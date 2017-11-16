const mongoose = require('mongoose');
const uuid = require('uuid').v4;

var facilitiesSchema = new mongoose.Schema({
    tv: {type:Boolean},
    airCondition: {type:Boolean},
    gameConsole: {type:Boolean},
    pool: {type:Boolean},
    smokingFree: {type:Boolean},
    wifi: {type:Boolean},
    washer: {type:Boolean},
    basicMaterial: {type:Boolean},
    telephone: {type:Boolean}
});

function Facility(tv, airCondition, gameConsole, pool, smokingFreei, wifi, washer, basicMaterial, telephone) {
    this.tv = tv
    this.airCondition = airCondition
    this.gameConsole = gameConsole
    this.pool = pool
    this.smokingFree = smokingFree
    this.wifi = wifi
    this.washer = washer
    this.basicMaterial = basicMaterial
    this.telephone = telephone
}

var roomSchema = new mongoose.Schema({
    id: {type: String, default: function genUUID(){
        uuid()
    }},
    numberOfBeds: {type:Number},
    facilities: {type:Object},
    prices: {type:Number}
});

function Room(numberOfBeds, tv, airCondition, gameConsole, pool, smokingFreei, wifi, washer, basicMaterial, telephone, price) {
    this.id = uuid();
    this.numberOfBeds = numberOfBeds;
    this.facilities = {
        tv: tv,
        airCondition: airCondition,
        gameConsole: gameConsole,
        pool: pool,
        smokingFree: smokingFree,
        wifi: wifi,
        washer: washer,
        basicMaterial: basicMaterial,
        telephone: telephone
    };
    this.price = price;
}

module.exports = {
    room: Room,
    roomSchema: mongoose.model('Room', roomSchema)
};
