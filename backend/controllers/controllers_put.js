const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    password: 'root',
    user: 'postgres'
});

//test connection à la base de données
client.connect(console.log('connexion réussie'));
const updateOneProject = (req, res) => {
    const id = parseInt(req.params.id);
    const { nom_projet, description_projet, recolte_projet, admin_projet } = req.body;

    client.query(
        'UPDATE projects SET nom_projet = $1, description_projet = $2, recolte_projet = $3, admin_projet = $4 WHERE id_projet = $5', [nom_projet, description_projet, recolte_projet, admin_projet, id],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Response:', { message: `Projet ID ${id} mis à jour` });
            res.status(200).json({ message: `Projet ID ${id} mis à jour` });
        }
    );
};


module.exports = {
    updateOneProject
};