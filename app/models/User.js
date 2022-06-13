const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/express-users', { useNewUrlParser: true });


const schema = new mongoose.Schema({
    name: String,
    username: String,
    fullAddress: { 
        street: String, 
        suit: String, 
        city: String, 
        zipcode: String, 
        geo: { 
            lat: String, 
            lng: String 
        } 
    },
    website: String
});

module.exports = mongoose.model('User', schema);