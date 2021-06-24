const express = require("express");
const app = express();
const cors = require("cors");
const socket  = require("socket.io")
//import libraries for express , cors 
app.use(express.json()); 
app.use(express.urlencoded({
    extended:true
}));
app.use(cors());
require("./config/mongoose.config.js"); //  connecting to mongoose
require("./routes/author.routes")(app);

app.listen(8000, () => console.log("Connected to  localhost8000")); //




// 1.)server JS has express. socket.oi , cors and  mongoose
// 2.)also we us app.use to call express.json , express.urlencoded and cors 
// 3.)  getting mongoose through ./config . 
// 4.)  call my routes to connect to my URL EX: api/products with a callback of (app)

// 5.)i also called app.listen to test my localhost server