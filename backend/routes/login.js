const express = require("express");
const router = express.Router();
const login = require("../controllers/login_controllers.js");
const authenticate = require("../middleware/authenticate.js");


/**
 * @swagger
 * /api/login:
 *   post:
 *     description: Use to login
 *     tags:
 *       - Login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Login
 *         in: body
 *         description: Login object
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/Login'
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       '200':
 *         description: A successful response
 */

router.post("/api/login", login.login);

/**
 * @swagger
 * /api/authenticate:
 *   get:
 *     description: Use to authenticate
 *     tags:
 *       - Login
 *     produces:
 *       - application/json
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Utilisateur autorisé
 *       '401':
 *         description: Utilisateur non autorisé
 *     securitySchemes:
 *       BearerAuth:
 *         type: http
 *         scheme: bearer
 *         bearerFormat: JWT
 */
router.get("/api/authenticate", authenticate.authenticateToken, (req, res) => {
	res.status(200).json({message: "Utilisateur autorisé"});
});

module.exports = router;