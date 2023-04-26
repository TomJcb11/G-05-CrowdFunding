const {Client} = require('pg');
const client = new Client({
    user:'postgres',
    host: 'localhost',
    port: 5432,
    database: 'projet_dev_3',
    password: 'root'
});

//test connection à la base de données
client.connect(console.log('connexion réussie'));

// récupération de tous les utilisateurs
const getAllUsers = (req, res) => {

    client.query('SELECT * FROM utilisateurs', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

const getOneUser = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('SELECT * FROM utilisateurs WHERE id_utilisateur = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

//chat
const getAllChats = (req, res) => {
    client.query('SELECT * FROM chat JOIN utilisateurs ON utilisateurs.id_utilisateur = chat.id_utilisateurs ', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

const getOneUserChat = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('SELECT * FROM chat', [id], (err, result) => {
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
    getAllChats,
    getOneUserChat
};

