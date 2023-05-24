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
        const result = await db.query('SELECT * FROM utilisateurs');
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
const getAllOdd = (req, res) => {
    client.query('SELECT odd.nom_odd FROM odd INNER JOIN projects ON odd.id_odd = projects.odd_projet GROUP BY odd.nom_odd;', (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).json(result.rows);
    });
};

const getAllProjectFromOdd = (req, res) => {
    const name = req.params.name;

    client.query(
        'SELECT projects.*, status.nom_statut, odd.nom_odd ' +
        'FROM projects ' +
        'JOIN status ON projects.statut_projet = status.id_statut ' +
        'JOIN odd ON projects.odd_projet = odd.id_odd ' +
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

const getAllProjects = (req, res) => {

    client.query('SELECT * FROM projects ORDER BY id_projet', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(200).json(result.rows);
    });
};

const getAllProject = (req, res) => {
    client.query('SELECT projects.*, status.nom_statut, odd.nom_odd FROM projects  JOIN status ON projects.statut_projet = status.id_statut  JOIN odd ON projects.id_projet = id_odd ORDER BY projects.id_projet;', (error, result) => {
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

    client.query('SELECT id_projet,nom_projet,admin_projet,prenom_utilisateur, nom_utilisateur,statut_projet,nom_statut ,id_odd, nom_odd,description_projet,objectif_projet,recolte_projet, benevole_projet FROM projects JOIN odd on id_projet = id_odd JOIN status on statut_projet = id_statut JOIN utilisateurs on admin_projet = id_utilisateur WHERE nom_projet = $1', [name], (err, result) => {
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
    getAllProjects,
    getOneProject
};