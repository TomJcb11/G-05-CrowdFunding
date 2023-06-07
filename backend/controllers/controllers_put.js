const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    user: 'alex'
});

//test connection à la base de données
client.connect(console.log('put: connexion réussie'));
const updateOneProject = async(req, res) => {
    const old_nom_projet = req.body.old_nom_projet;
    const nom_projet = req.body.nom_projet;
    const description_projet = req.body.description_projet;
    const objectif_projet = req.body.objectif_projet;
    const odd_projet = req.body.odd_projet;
    const statut_projet = req.body.statut_projet;
    const admin_projet = 1; // ID de l'administrateur par défaut   

    const result = await client.query('SELECT recolte_projet FROM projets WHERE nom_projet = $1', [old_nom_projet]);
    const recolte_projet = result.rows[0].recolte_projet;

    console.log(req.body.old_nom_projet, req.body.nom_projet, req.body.description_projet, req.body.objectif_projet, recolte_projet, req.body.odd_projet, req.body.statut_projet);

    console.log(`Updating project with nom_projet=${nom_projet}, description_projet=${description_projet}, objectif_projet=${objectif_projet}, statut_projet=${statut_projet}`);

    if (!nom_projet || isNaN(objectif_projet)) {
        console.error('Invalid input, nom_projet is not provided or recolte_projet is not a number:', nom_projet, objectif_projet);
        res.status(400).send('Invalid input, nom_projet is not provided or recolte_projet is not a number');
        return;
    }

    client.query(
        'UPDATE projets SET nom_projet = $1, admin_projet = $2, description_projet = $3, statut_projet= $4, objectif_projet = $5, recolte_projet = $6, odd_projet = $7 WHERE nom_projet = $8', [nom_projet, admin_projet, description_projet, statut_projet, objectif_projet, recolte_projet, odd_projet, old_nom_projet],
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