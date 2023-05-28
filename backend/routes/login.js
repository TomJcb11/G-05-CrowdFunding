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
 *     description: Cette route permet de vérifier si l'utilisateur est autorisé en utilisant un jeton d'authentification valide.
 *     tags:
 *       - Authentification
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: Jeton d'authentification de l'utilisateur
 *     responses:
 *       200:
 *         description: Requête réussie. L'utilisateur est autorisé.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message indiquant que l'utilisateur est autorisé.
 *       401:
 *         description: Accès non autorisé. Le jeton d'authentification est invalide ou manquant.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message d'erreur indiquant l'accès non autorisé.
 */
router.get("/api/authenticate", authenticate.authenticateToken, (req, res) => {
	res.status(200).json({message: "Utilisateur autorisé"});
});

module.exports = router;