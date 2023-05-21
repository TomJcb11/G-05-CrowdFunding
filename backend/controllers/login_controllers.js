const jwt = require("jsonwebtoken");
const { Users } = require("../database/database.js");

async function getUsersLogins(req, res) {
	try {
		const users = await Users.findAll({attributes: ["id_user", "email", "password"]});
		res.status(200);
		return users;
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Erreur du serveur");
	}
}


async function login(req, res) {
	const users = await getUsersLogins(req, res);
	let userFound = null;
	for (userFound of users) {
		if (userFound.email == req.body.email && userFound.password == req.body.password) {
			const token = jwt.sign({id: userFound.id_user}, "hello");
			return res.status(200).json({token: token, id: userFound.id_user});
		}
	}
	res.status(401).json({message: "Utilisateur non autorisé"});
	
}

module.exports = { login };