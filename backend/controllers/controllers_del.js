/**const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    password: 'root',
    user: 'postgres'
});

// Test de connexion à la base de données
client.connect(console.log('connexion réussie'));


const delOneProject = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('DELETE FROM projects WHERE id_projet = $1', [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.status(204).send(); // Réponse avec le code de statut HTTP 204 (No Content)
    });
};

// Exportation des fonctions
module.exports = {
    delOneProject
};*/