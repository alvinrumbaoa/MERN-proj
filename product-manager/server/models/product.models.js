const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
            title: {type:String} ,
            price: {type: Number},
            description: {type: String}
}, {timestamps: true});  // initialize object data types and includes timestamps for data time tracking
    

module.exports = mongoose.model('Products', ProductSchema);