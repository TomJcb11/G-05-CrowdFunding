const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    password: 'root',
    user: 'postgres'
});

//test connection à la base de données
client.connect(console.log('get: connexion réussie'));

// récupération de tous les utilisateurs
const getAllUsers = async(req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
};

const getOneUser = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('SELECT * FROM utilisateurs WHERE id_utilisateurs = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

const getAllProjects = (req, res) => {

    client.query('SELECT * FROM projects ORDER BY id_projet', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

const getOneProject = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('SELECT * FROM projects WHERE id_projet = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};


// exportation des fonctions
module.exports = {
    getAllUsers,
    getOneUser,
    getAllProjects,
    getOneProject
};