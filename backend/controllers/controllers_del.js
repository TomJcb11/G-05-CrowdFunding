const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'giverr',
    user: 'alex'
});

//test connection à la base de données
client.connect(console.log('del: connexion réussie'));

const deleteOneProject = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('DELETE FROM investisseurs WHERE id_projet = $1', [id], (err, result) => {
        if (err) { 
        console.log(err);
        }
        client.query('DELETE FROM projets WHERE id_projet = $1', [id], (err, result) => {
            if (err) {
                console.log(err);
            }
        });
        res.status(200).json({ message: `Project with ID ${id} has been deleted.` });
    });
};

module.exports = {
    deleteOneProject,
};