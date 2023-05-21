const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
	try{
		const token = req.headers.authorization.split(" ")[1];
		jwt.verify(token, "hello");
		next();
	}catch(err){
		res.status(401).json({message: "Utilisateur non autorisé"});
	}
}

module.exports = { authenticateToken };
