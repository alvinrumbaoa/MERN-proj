const mongoose = require("mongoose");
const dbName ="author";

mongoose.connect("mongodb://localhost/" + dbName,  {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(() => console.log("successfully established connection to " +dbName ))
    .catch((err) => console.log("Something went wrong when connecting to database"));


    //established connection to mongoDB and create author database with mongoose