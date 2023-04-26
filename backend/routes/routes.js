const express = require('express');
const router = express.Router();

const get = require('../controllers/controllers_get');
//const post = require('../controllers/controllers_post');
//const put = require('../controllers/controler_put');
//const del = require('../controllers/controler_delete');


router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/api/users', get.getAllUsers);
router.get('/api/users/:id', get.getOneUser);

//chat
router.get('/api/chats/', get.getAllChats);
router.get('/api/chats/:id', get.getOneUserChat)

// exportation des routes
module.exports = router;
