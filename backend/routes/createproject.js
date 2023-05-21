const express = require("express");
const router = express.Router();
const post = require("../controllers/post_controllers.js");

/*
    * @swagger
    * /api/projects:
    *  post:
    *     description: Use to post a project
    *    responses:
    *      '200':
    *       description: A successful response
    *     '500':
    *      description: Internal server error
    *     '400':
    *      description: Bad request
*/
router.post("/api/projects", post.postProject);

module.exports = router;