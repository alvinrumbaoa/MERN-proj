const PetController = require("../controller/pets.controller");

module.exports = function(app)   {
        // get all movies
	app.get("/api/pets", PetController.getAllPets);
	// create movie
	app.post("/api/pets", PetController.createPets);
	// get one movie
	// create a param variable called "id"
	app.get("/api/pets/:id", PetController.getOnePets);
	// update movie
	app.put("/api/pets/:id", PetController.updatePets);
	// // delete movie
	app.delete("/api/pets/:id", PetController.deletePets);


}