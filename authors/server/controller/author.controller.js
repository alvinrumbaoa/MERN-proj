const Authors = require("../models/author.model");

module.exports.getAllAuthors = (response, request) =>{
    Authors.find({})
        .then((allAuthors) => {
            console.log(allAuthors);
            response.json(allAuthors);
        })
        .catch(err => { 
                console.log(err);
                response.json(err); //catching axios
        })


}  
module.exports.createAuthors = (response, request) =>{
    Authors.create(request.body)
    .then((newAuthors) =>{
        console.log(newAuthors);
        response.json(newProducts);
    })
    .catch(err => { 
        console.log(err);
        response.status(400).json(err); //catching axios error
    });
}


module.exports.updateAuthors  = (request, response) =>{

        Products.findOneAndUpdate



}
