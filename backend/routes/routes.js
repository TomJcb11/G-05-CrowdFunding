const express = require("express");
const router = express.Router();
const createproject = require("./createproject");
const login = require("./login");

router.get("/", (req, res) => {
	res.send("Hello World!");
});


router.use(createproject);
router.use(login);

// exportation des routes
module.exports = router;