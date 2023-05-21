const { Projects } = require("../database/database.js"); 

async function postProject(req, res) {
	try {
		const project = await Projects.create({
			name_project: req.body.name_project,
			owner_project: req.body.owner_project,
			description_project: req.body.description_project,
			status_project: req.body.status_project,
			goal_money: req.body.goal_money,
			project_picture: req.body.project_picture,
			limit_date: req.body.end_data
		});
		res.json(project);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Erreur du serveur");
	}
}

// export my controllers post
module.exports = {
	postProject
};