const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    password: 'root',
    user: 'postgres'
});

//test connection à la base de données
client.connect(console.log('post: connexion réussie'));

// Fonction pour gérer la requête POST
const submitDonation = async(req, res) => {
    const nom_projet = req.params.nom_projet;
    const id_utilisateur = parseInt(req.params.id_ut);;
    const montant_don = req.body.montant_don;
    const message_don = req.body.message_don;
    const mode_paiement = req.body.mode_paiement;

    try {
        const result = await client.query('SELECT id_paiement FROM paiements WHERE nom_paiement = $1', [mode_paiement]);
        const moyen_paiement = result.rows[0].id_paiement;
        const result2 = await client.query('SELECT id_projet FROM projets WHERE nom_projet = $1', [nom_projet]);
        const id_projet = result2.rows[0].id_projet;
        await client.query('INSERT INTO investisseurs (id_projet, id_utilisateur, id_paiement, message_transaction, montant) VALUES ($1, $2, $3, $4, $5)', [id_projet, id_utilisateur, moyen_paiement, message_don, montant_don]);
        await client.query('UPDATE PROJETS SET recolte_projet = recolte_projet + $1 WHERE nom_projet = $2', [montant_don, nom_projet]);

        res.status(200).json({ message: "Donation successful", status: 200 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

const createProject = async(req, res) => {
    const nom_projet = req.body.nom_projet;
    const description_projet = req.body.description_projet;
    const recolte_projet = req.body.recolte_projet;
    const odd_projet = req.body.odd_projet;
    const statut_projet = req.body.statut_projet;
    const admin_projet = 1; // ID de l'administrateur par défaut

    // Vérifiez que nom_projet existe et n'est pas vide
    if (!nom_projet) {
        res.status(400).json({ error: 'nom_projet is required' });
        return;
    }

    try {
        await client.query('INSERT INTO projets (nom_projet, description_projet, recolte_projet, odd_projet, statut_projet, admin_projet) VALUES ($1, $2, $3, $4, $5, $6)', [nom_projet, description_projet, recolte_projet, odd_projet, statut_projet, admin_projet]);

        res.status(200).json({ message: "Project successfully created", status: 200 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred', details: error });
    }
};



module.exports = {
    submitDonation,
    createProject
};