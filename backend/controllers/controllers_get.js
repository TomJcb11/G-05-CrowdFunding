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
      res.status(200).json(result.rows);
    });
};

const getAllProjectFromOdd = (req, res) => {
    const nomOdd = req.params.nomOdd;

    client.query('SELECT * FROM projets WHERE odd_projet = (SELECT id_odd FROM odd WHERE nom_odd = $1)', [nomOdd], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};


const getAllProject=(req,res) =>{
    client.query('SELECT projets.*, statuts.nom_statut FROM projets JOIN statuts ON projets.statut_projet = statuts.id_statut ORDER BY projets.id_projet;', (error, result) => {
      if (error) {
        throw error;
      }
      const projects = result.rows.map(row => ({
        ...row,
        statut: { nom_statut: row.nom_statut }
      }));
      res.status(200).json(result.rows);
    });
};

const getOneProject = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('   SELECT projets.*, statuts.nom_statut ,identifiant_utilisateur ,nom_odd from projets JOIN statuts ON projets.statut_projet = statuts.id_statut  join utilisateurs on utilisateurs.id_utilisateur=projets.admin_projet  JOIN odd on odd_projet = id_odd where  id_projet = $1', [id], (err, result) => {
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
    getAllOdd,
    getAllProjectFromOdd,
    getAllProject,
    getOneProject
};