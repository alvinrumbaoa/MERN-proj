const Products = require("../models/product.models");

module.exports.getAllProducts = (req, res) => {

    Products.find({})
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })

}

module.exports.createProducts= (req, res) => {
    console.log("Create Product");
    console.log(req.body);
    Products.create(req.body)
        .then((newProducts) => {
            console.log(newProducts);
            res.json(newProducts);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });

}

module.exports.getOneProducts = (req, res) => {

    Products.findOne({
            _id: req.params.id
        })
        .then(oneProduct => {
            console.log(oneProduct);
            res.json(oneProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })


}