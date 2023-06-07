const express = require('express');
const router = express.Router();

const get = require('../controllers/controllers_get');
const post = require('../controllers/controllers_post');
const put = require('../controllers/controllers_put');
const del = require('../controllers/controllers_del');
const authenticate = require("../middleware/authenticate.js");

router.get('/', (req, res) => {
    res.send("Vous êtes bien sur l'api");
});

router.get('/Donation', (req, res) => {
    res.send("Vous êtes bien sur l'api donation");
});

router.get('/api/users', get.getAllUsers);
router.get('/api/users/:id', get.getOneUser);
router.get('/api/projects', get.getAllProject);
router.put('/api/projects/modify/:nom_projet', put.updateOneProject);
router.get('/api/odd', get.getAllOdd);
router.get('/api/odd/:name', get.getAllProjectFromOdd);
router.get('/api/projects/:nom_projet', get.getOneProject);
router.get('/api/:nom_projet/Donation', get.getStats);
router.get("/api/authenticate", authenticate.authenticateToken, (req, res) => {
	res.status(200).json({message: "Utilisateur autorisé"});
});
router.post('/api/donation/send/:nom_projet/:id_ut', post.submitDonation);
router.post('/api/projects/createproject', post.createProject);
router.post("/api/login", post.login);
router.delete('/api/projects/:id', del.deleteOneProject);

// exportation des routes

module.exports = router;