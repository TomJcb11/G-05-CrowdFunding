// import module for connexion to the database
const {Client} = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr'
});

// test to connect to the database
client.connect(console.log('get connexion réussie'));

// get all users
const getAllUsers = (req, res) => {

    client.query('SELECT * FROM tableUsers', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

// get one user
const getOneUser = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('SELECT * FROM tableUsers WHERE id_user = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

// get all projects
const getAllProjects = (req, res) => {

    client.query('SELECT * FROM tableProjects', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};


// export my controllers get
module.exports = {
    getAllUsers,
    getOneUser,
    getAllProjects
};