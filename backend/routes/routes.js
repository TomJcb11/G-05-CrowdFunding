const express = require('express');
const router = express.Router();

const get = require('../controllers/controllers_get');
const post = require('../controllers/controllers_post');
//const put = require('../controllers/controler_put');
//const del = require('../controllers/controler_delete');

router.get('/', (req, res) => {
    res.send("Vous êtes bien sur l'api");
});

router.get('/Donation', (req, res) => {
    res.send("Vous êtes bien sur l'api donation");
});

router.get('/api/users', get.getAllUsers);

router.get('/api/users/:id', get.getOneUser);

router.get('/api/odd',get.getAllOdd);

router.get('/api/odd/:name',get.getAllProjectFromOdd);

router.get('/api/project',get.getAllProject)

router.get('/api/project/:id',get.getOneProject)

router.get('/api/:nom_projet/Donation', get.getStats);

router.post('/api/donation/send/:nom_projet/:id_ut', post.submitDonation);

// exportation des routes

module.exports = router;