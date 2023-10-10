const {Router} = require('express');
const router = Router();
const {createUser, login} = require('../controllers/user.controller')
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: El gestor de los Usuarios
 * /api/users:
 *   post:
 *     summary: Registra un usuario en el sistema.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'User registered'}
 *       500:
 *         description: Some server error
 * 
 * /api/users/login:
 *   post:
 *     summary: Crea un nuevo Usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             example: {"nickname": "Antonino", "password" : "El_condorito"}
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando si las credenciales son correctas.
 *         content:
 *           application/json:
 *             schema:
 *               example: { message: "The username and password combination is correct!", goIn: 1 }
 *       400:    
 *         description: Indica si las credenciasles son incorrectas o sino existe el Usuario.
 *         content:
 *           application/json:
 *             schema:
 *               example: [{message: "The username does not exist", goIn: 0}, { message: "The password is invalid", goIn: 0 }] 
 *       500:
 *         description: Some server error
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nickname
 *         - password
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del Usuario
 *         name:
 *           type: String
 *           description: El nombre del Usuario
 *         nickname:
 *           type: String
 *           description: El nombre unico del Usuario
 *         password:
 *           type: String
 *           description: La contraseña de acceso al sistema.
 *       example:
 *         id: d5fEasz
 *         name: Jesus Navarrete
 *         nickname: Antonino300
 *         password: $2a$10$k5iTIlRMuWlbbo3uoF7pIeHZxmncQjuu6k9e7F6jmsTqzzRb3zU7K
 */
router.route('/')
    .post(createUser)
router.route('/login')
    .post(login)
module.exports = router;