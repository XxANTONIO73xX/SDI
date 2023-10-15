const {Router} = require('express');
const router = Router();
const {getContactos, createContacto, getContacto, updateContacto, deleteContacto, sendMessage} = require('../controllers/contactos.controller');
/**
 * @swagger
 * tags:
 *   name: Contacto
 *   description: El gestor de los Contactos
 * /api/contactos:
 *   post:
 *     summary: Crea un nuevo Contacto
 *     tags: [Contacto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contacto'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Contacto Saved'}
 *       500:
 *         description: Some server error
 * /api/contactos/mail:
 *   post:
 *     summary: Envia un mensaje por correo electronico al contacto.
 *     tags: [Contacto]
 *     requestBody:
 *       required: true
 *       content:
 *       application/json:
 *         schema:
 *           example: {user: "Jesus Navarrete", asunto: "Experimento", contenido: "Este es un mensaje de prueba asi es", email: "spoonme.73@gmail.com" }
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando si el correo se envio correctamente o no.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: "Mensaje enviado"}
 * /api/contactos/user/{id}:
 *   get:
 *     summary: Devuelve una lista de todos los Contactos del Usuario
 *     tags: [Contacto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del Usuario
 *     responses:
 *       200:
 *         description: Esta URL devuelve una lista de todos los Contactos del Usuario en formato json
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contacto'
 * 
 * /api/contactos/{id}:
 *   get:
 *     summary: Obtener Contacto por id
 *     tags: [Contacto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del Contacto
 *     responses:
 *       200:
 *         description: Esta URL devuelve el Contacto correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contacto'
 *       404:
 *         description: The Contacto was not found
 *   put:
 *    summary: Modificar los datos del Contacto
 *    tags: [Contacto]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del Contacto
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Contacto'
 *    responses:
 *      200:
 *        description: Esta URL devuelve un mensaje si el Contacto fue modificado correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Contacto Updated'}
 *      404:
 *        description: The Contacto was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar Contacto
 *     tags: [Contacto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del Contacto
 *
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje si el Contacto pudo ser eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Contacto Deleted'}
 *       404:
 *         description: The Contacto was not found
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Contacto:
 *       type: object
 *       required:
 *         - nombre
 *         - apellidos
 *         - telefono
 *         - categoria
 *         - idUsuario
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del Contacto
 *         nombre:
 *           type: String
 *           description: El nombre del Contacto
 *         apellidos:
 *           type: String
 *           description: Los apellidos del Contacto
 *         telefono:
 *           type: String
 *           description: El telefono del Contacto
 *         categoria:
 *           type: String
 *           description: La categoria del Contacto
 *         idUsuario:
 *           type: String
 *           description: El usuario al que pertenece el Contacto
 *       example:
 *         id: 6528b7796bd480187b262454
 *         nombre: Jose
 *         apellidos: Navarro
 *         telefono: "+526221018849"
 *         categoria: Amigo
 *         idUsuario: 6524d14e82ea98549a4e27ad
 */
router.route('/user/:id')
    .get(getContactos)
router.route('/')
    .post(createContacto)
router.route('/mail')
    .post(sendMessage)
router.route('/:id')
    .get(getContacto)
    .put(updateContacto)
    .delete(deleteContacto)

module.exports = router;