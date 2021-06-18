const express = require("express");
const app = express();
const cors = require("cors");
//import libraries for express , cors 
require("./config/mongoose.config.js"); //  connecting to mongoose

app.use(express()); 
app.use(express.urlencoded({extended:true}));
app.use(cors());

require("./controller/product.controller");

app.listen(8000, () => console.log("Connected to  localhost8000")); //
