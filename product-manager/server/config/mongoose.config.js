const mongoose = require("mongoose");
const dbName = "product_dB";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log('Established connection to '+  dbName +  'database'))
    .catch(err => console.log("Something wrong with connection to database"));


