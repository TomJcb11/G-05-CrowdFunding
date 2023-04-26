// import module for connexion to the database
const {Client} = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr'
});

// test to connect to the database
client.connect(console.log('post connexion réussie'));

// post a project
const postProject = (req, res) => {
    const {projectName, projectDescription, projectMoney} = req.body;

    client.query("INSERT INTO tableProjects (name_project, owner_project, description_project, status_project, goal_money, collected_money) VALUES ($1, 1, $2, 1, $3, 100) RETURNING *", [projectName, projectDescription, projectMoney], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200);
    });
};

// export my controllers post
module.exports = {
    postProject
};