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

    client.query('SELECT * FROM utilisateurs WHERE id_utilisateur = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

const getAllOdd = (req, res) => {
    client.query('SELECT odd.nom_odd FROM odd INNER JOIN projets ON odd.id_odd = projets.odd_projet GROUP BY odd.nom_odd;', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    });
};

const getAllProjectFromOdd = (req, res) => {
    const name = req.params.name;

    client.query(
        'SELECT projets.*, statuts.nom_statut, odd.nom_odd ' +
        'FROM projets ' +
        'JOIN statuts ON projets.statut_projet = statuts.id_statut ' +
        'JOIN odd ON projets.odd_projet = odd.id_odd ' +
        'WHERE odd.nom_odd = $1', [name],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des projets.' });
            } else {
                const projects = result.rows.map(row => ({
                    ...row,
                    statut: { nom_statut: row.nom_statut }
                }));
                res.status(200).json(projects);
            }
        }
    );
};



const getAllProject = (req, res) => {
    client.query('SELECT projets.*, statuts.nom_statut, odd.nom_odd FROM projets  JOIN statuts ON projets.statut_projet = statuts.id_statut  JOIN odd ON projets.id_projet = id_odd ORDER BY projets.id_projet;', (error, result) => {
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
    const name = req.params.id;

    client.query('SELECT id_projet,nom_projet,admin_projet,nom_utilisateur,statut_projet,nom_statut ,id_odd, nom_odd,description_projet,objectif_projet,recolte_projet, benevole_projet FROM projets JOIN odd on id_projet = id_odd JOIN statuts on statut_projet = id_statut JOIN utilisateurs on admin_projet = id_utilisateur WHERE nom_projet = $1', [name], (err, result) => {
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
    getAllOdd,
    getAllProjectFromOdd,
    getAllProject,
    getOneProject
};