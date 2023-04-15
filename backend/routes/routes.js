const express = require('express');
const router = express.Router();

const get = require('../controler/controler_get');
const post = require('../controler/controler_post');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

//route pour récupérer les données de la collection "test"
router.get('/collection', get.getTestCollectionData);



// il faut que il soit tout en bas
module.exports = router;