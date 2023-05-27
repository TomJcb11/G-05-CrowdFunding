const express = require("express");
const router = express.Router();
const post = require("../controllers/post_controllers.js");

/**
 * @swagger
 * /api/projects:
 *   post:
 *     description: Use to post a project
 *     tags:
 *       - Projects
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Project
 *         in: body
 *         description: Project object
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Project'
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.post("/api/projects", post.postProject);

module.exports = router;