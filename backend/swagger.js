const components = {
	schemas: {
		Project: {
			type: "object",
			properties: {
				name_project: {
					type: "string",
					description: "Nom du projet"
				},
				owner_project: {
					type: "number",
					description: "Propriétaire du projet (id)"
				},
				description_project: {
					type: "string",
					description: "Description du projet"
				},
				status_project: {
					type: "number",
					description: "Statut du projet (0: en cours, 1: terminé, 2: annulé))"
				},
				goal_money: {
					type: "number",
					description: "Objectif de financement du projet"
				},
				project_picture: {
					type: "string",
					description: "Image du projet"
				},
				limit_date: {
					type: "string",
					format: "date",
					description: "Date limite du projet"
				}
			},
			required: [
				"name_project",
				"owner_project",
				"description_project",
				"status_project",
				"goal_money",
				"limit_date"
			]
		},
		Login: {
			type: "object",
			properties: {
				email: {
					type: "string",
					description: "Email de l'utilisateur"
				},
				password: {
					type: "string",
					description: "Mot de passe de l'utilisateur"
				}
			},
			required: [
				"email",
				"password"
			]
		},
	}
};

module.exports = components;