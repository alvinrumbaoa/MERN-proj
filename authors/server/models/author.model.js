const mongoose = require("mongoose");

const AuthorSchema  = new mongoose.Schema({
        Author: {type:String,
            required: [true, "Authors Name is required"],
            minLength: [3, "Authors Name must be at least 3 characters long"],
            unique: true 
        }
}, {timestamps: true});

module.exports = mongoose.mode("Author", AuthorSchema);