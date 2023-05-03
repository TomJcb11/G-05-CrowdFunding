const {Client} = require('pg');
const client = new Client({
    user:'postgres',
    host: 'localhost',
    port: 5432,
    database: 'projet_dev_3',
    password: 'root'
});

//test connection à la base de données
client.connect(console.log('connexion réussie'));


//const postMessage = (req, res) => {
//    console.log(req.json)
//    client.query('INSERT INTO (projet_id, id_utilisateurs, chat_id, chat_message VALUE())', (err, result) => {
//        if (err) {
//            console.log(err);
//        }
//        res.status(200).json(result.rows);
//    });
//};


const postMessage = (req, res) => {
//    const {projectName, projectDescription, projectMoney} = req.body;
const { user_id, projet_id, chat_message } = req.body;
const values = [user_id, projet_id, chat_message];
const sql= 'INSERT INTO chat (projet_id, id_utilisateurs, chat_message) VALUES ($1, $2, $3)'

try {
    client.query(sql,values)
    res.status(200).send('Message inserted successfully');
} catch (err) {
    res.status(200).send('Message inserted successfully');
}

// client.query('INSERT INTO (projet_id, id_utilisateurs, chat_id, chat_message VALUE())', (err) => {
//         if (err) {
//             console.log(err);
//             res.status(400)
//         }
//         res.status(200);
//         console.log('bien reçu')
//     });
}

const getOneUserChat = (req, res) => {
    const id = parseInt(req.params.id);

    client.query('SELECT * FROM chat ORDER BY chat_id ASC', [id], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log('result')
        res.status(200).json(result.rows);
    });
};


// exportation des fonctions
module.exports = {
    getOneUserChat,
    postMessage
};
