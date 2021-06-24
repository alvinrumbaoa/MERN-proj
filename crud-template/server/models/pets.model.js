const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
            animal: {type:String} ,
            breed: {type: String}
}, {timestamps: true});  // initialize object data types and includes timestamps for data time tracking
    

module.exports = mongoose.model('Pets', PetSchema);