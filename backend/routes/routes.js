const express = require('express');
const router = express.Router();

const get = require('../controllers/controllers_get');
//const post = require('../controllers/controllers_post');
const put = require('../controllers/controllers_put');
const del = require('../controllers/controllers_del');



router.get('/', (req, res) => {
    res.send("Vous êtes bien sur l'api");
});

router.get('/api/users', get.getAllUsers);

router.get('/api/users/:id', get.getOneUser);
router.get('/api/projects', get.getAllProjects);
router.get('/api/projects/:id', get.getOneProject);
router.delete('/api/projects/:id', del.deleteOneProject);
router.put('/api/projects/modify/:id', put.updateOneProject);

router.get('/api/odd', get.getAllOdd);

router.get('/api/odd/:name', get.getAllProjectFromOdd);



router.get('/api/project/:id', get.getOneProject)

// exportation des routes
module.exports = router;