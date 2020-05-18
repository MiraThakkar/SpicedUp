const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/books"
router.route("/")
    .get(recipesController.findAll)
    .post(recipesController.create);

module.exports = router;