const {Client} = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    password: 'root',
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

//récupération d'un utilisateur
const getOneUser = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('SELECT * FROM utilisateurs WHERE id_utilisateur = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

//récupération de tous les odd
const getAllOdd=(req,res) =>{
    client.query('SELECT odd.nom_odd FROM odd INNER JOIN projets ON odd.id_odd = projets.odd_projet GROUP BY odd.nom_odd;', (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result.rows);
    });
};

const getStats = (req, res) => {
    const id_projet = parseInt(req.params.id_projet);

    client.query('SELECT COUNT(*) FROM investisseurs WHERE id_projet = $1', [id_projet], (error, result1) => {
        if (error) {
            throw error;
        }

        client.query('SELECT recolte_projet FROM projets WHERE id_projet = $1', [id_projet], (error, result2) => {
            if (error) {
                throw error;
            }

            const response = {
                count: result1.rows[0].count,
                recolte_projet: result2.rows[0].recolte_projet,
            };

            res.status(200).json(response);
        });
    });
};

// exportation des fonctions
module.exports = {
    getAllUsers,
    getOneUser,
    getAllOdd,
    getStats
};