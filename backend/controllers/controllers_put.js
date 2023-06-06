const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    password: 'root',
    user: 'postgres'
});

//test connection à la base de données
client.connect(console.log('put: connexion réussie'));
const updateOneProject = (req, res) => {
    const nom_projet = req.params.nom_projet;
    const { description_projet, recolte_projet, odd_projet, statut_projet, admin_projet } = req.body;

    console.log(`Updating project with nom_projet=${nom_projet}, description_projet=${description_projet}, recolte_projet=${recolte_projet}, admin_projet=${admin_projet}`);

    if (!nom_projet || isNaN(recolte_projet)) {
        console.error('Invalid input, nom_projet is not provided or recolte_projet is not a number:', nom_projet, recolte_projet);
        res.status(400).send('Invalid input, nom_projet is not provided or recolte_projet is not a number');
        return;
    }

    client.query(
        'UPDATE projets SET description_projet = $1, recolte_projet = $2, odd_projet = $3, statut_projet = $4,admin_projet = $5 WHERE nom_projet = $6', [description_projet, recolte_projet, odd_projet, statut_projet, admin_projet, nom_projet],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Response:', { message: `Projet ${nom_projet} mis à jour` });
            res.status(200).json({ message: `Projet ${nom_projet} mis à jour` });
        }
    );
};



module.exports = {
    updateOneProject
};