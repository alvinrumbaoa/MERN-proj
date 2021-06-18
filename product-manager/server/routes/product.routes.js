const ProductController = require("../controller/product.controller");

module.exports = function(app){
        // get all movies
	app.get("/api/products", ProductController.getAllProduct);
	// create movie
	app.post("/api/products", ProductController.createProduct);
	// get one movie
	// create a param variable called "id"
	app.get("/api/products:id", ProductController.getOneProduct);
	// update movie
	// app.put("/api/products:id", ProductController.updateProduct);
	// // delete movie
	// app.delete("/api/products:id", ProductController.deleteProduct);





}