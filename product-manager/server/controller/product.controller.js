const Products = require("../models/products.models");

module.exports.getAllProduct = (req, res) => {

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

module.exports.createProduct = (req, res) => {
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

module.exports.getOneProduct = (req, res) => {

    Product.findOne({
            _id: req.params.id
        })
        .then(oneProduct => {
            console.log(req, params.id);
            res.json(req.params.id);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })


}