const express = require("express");
const router = express.Router();
const login = require("../controllers/login_controllers.js");
const authenticate = require("../middleware/authenticate.js");

router.post("/api/login", login.login);

router.get("/api/authenticate", authenticate.authenticateToken, (req, res) => {
	res.status(200).json({message: "Utilisateur autorisé"});
});

module.exports = router;