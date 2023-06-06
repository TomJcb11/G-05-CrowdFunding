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
const updateOneProject = async(req, res) => {
    const nom_projet = req.params.nom_projet;
    const description_projet = req.body.description_projet;
    const objectif_projet = req.body.objectif_projet;
    const odd_projet = req.body.odd_projet;
    const statut_projet = req.body.statut_projet;
    const admin_projet = 1; // ID de l'administrateur par défaut    

    console.log(`Updating project with nom_projet=${nom_projet}, description_projet=${description_projet}, objectif_projet=${objectif_projet}, admin_projet=${admin_projet}`);

    if (!nom_projet || isNaN(objectif_projet)) {
        console.error('Invalid input, nom_projet is not provided or recolte_projet is not a number:', nom_projet, objectif_projet);
        res.status(400).send('Invalid input, nom_projet is not provided or recolte_projet is not a number');
        return;
    }

    client.query(
        'UPDATE projets SET nom_projet = $1, description_projet = $2, objectif_projet = $3, odd_projet = $4, statut_projet= $5 WHERE nom_projet = $1', [nom_projet, description_projet, objectif_projet, odd_projet, statut_projet],
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