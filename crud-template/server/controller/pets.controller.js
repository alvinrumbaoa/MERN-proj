const Products = require("../models/pets.model");
    module.exports.getAllPets= (req, res) => {
    
        Products.find({})
            .then((allPets) => {
                console.log(allPets);
                res.json(allPets);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    
    }
    
    module.exports.createPets = (req, res) => {
        console.log("Create Pets");
        console.log(req.body);
        Products.create(req.body)
            .then((newPets) => {
                console.log(newPets);
                res.json(newPets);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
    
    }
    
    module.exports.getOnePets = (req, res) => {
    
        Products.findOne({
                _id: req.params.id
            })
            .then(onePets => {
                console.log(onePet);
                res.json(onePet);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    
    
    }
    
    module.exports.updatePets = (req, res) => {
    
        Products.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(updatedPets => {
                console.log(updatedPets);
                res.json(updatedPets);
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    }
    
    
    module.exports.deletePets = (req, res) =>{
    
        Products.deleteOne({_id: req.params.id})
            .then(deletePets => {
                console.log(deletedPets);
                res.json(deletePets);
            }) 
            .catch(err => {
                console.log(err);
                res.json(err);
            })
    }