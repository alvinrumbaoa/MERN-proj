const ProductController = require("../controller/product.controller");

module.exports = function(app){
        // get all movies
	app.get("/api/products", ProductController.getAllProducts);
	// create movie
	app.post("/api/products", ProductController.createProducts);
	// get one movie
	// create a param variable called "id"
	app.get("/api/products/:id", ProductController.getOneProducts);
	// update movie
	app.put("/api/products/:id", ProductController.updateProducts);
	// // delete movie
	app.delete("/api/products/:id", ProductController.deleteProducts);





}