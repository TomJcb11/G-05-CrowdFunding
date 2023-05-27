const { Users, Projects } = require("../database/database.js"); 


async function getAllUsers(req, res) {
	try {
		const users = await Users.findAll();
		res.json(users);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Erreur du serveur");
	}
}

async function getOneUser(req, res) {
	try {
		const user = await Users.findOne({
			where: {
				id_client: req.params.id
			}
		});
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Erreur du serveur");
	}
}

async function getAllProjects(req, res) {
	try {
		const projects = await Projects.findAll();
		res.json(projects);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Erreur du serveur");
	}
}


// We export the functions to use them in the file routes.js
module.exports = {
	getAllUsers,
	getOneUser,
	getAllProjects
};