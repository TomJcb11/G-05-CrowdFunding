const {Client} = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    password: 'admin',
    user: 'postgres'
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

const getAllOdd=(req,res) =>{
    client.query('SELECT odd.nom_odd FROM odd INNER JOIN projets ON odd.id_odd = projets.odd_projet GROUP BY odd.nom_odd;', (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result.rows);
    });
};



// exportation des fonctions
module.exports = {
    getAllUsers,
    getOneUser,
    getAllOdd
};