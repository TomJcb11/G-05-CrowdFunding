const express = require('express');
const router = express.Router();

const get = require('../controllers/controllers_get');
const post = require('../controllers/controllers_post');
//const put = require('../controllers/controler_put');
//const del = require('../controllers/controler_delete');


router.get('/', (req, res) => {
    res.send('Hello World!');
});

//users
router.get('/api/users', get.getAllUsers);
router.get('/api/users/:id', get.getOneUser);

//projects
router.get('/api/projects', get.getAllProjects);
router.post('/api/projects', post.postProject);

// exportation des routes
module.exports = router;