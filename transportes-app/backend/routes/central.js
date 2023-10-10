const {Router} = require('express');
const router = Router();
const {getCentrales, createCentral, getCentral,
    updateCentral, deleteCentral} = require('../controllers/central.controller');
/**
 * @swagger
 * tags:
 *   name: Central
 *   description: El gestor de las Centrales
 * /api/centrales:
 *   get:
 *     summary: Devuelve una lista de todas las centrales
 *     tags: [Central]
 *     responses:
 *       200:
 *         description: Esta URL devuelve una lista de todas las centrales en formato json
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Central'
 *   post:
 *     summary: Crea una nueva Central
 *     tags: [Central]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Central'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Central Saved'}
 *       500:
 *         description: Some server error
 * 
 * /api/centrales/{id}:
 *   get:
 *     summary: Obtener Central por id
 *     tags: [Central]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la Central
 *     responses:
 *       200:
 *         description: Esta URL devuelve la central correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Central'
 *       404:
 *         description: The Central was not found
 *   put:
 *    summary: Modificar la Central
 *    tags: [Central]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de la Central
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Central'
 *    responses:
 *      200:
 *        description: Esta URL devuelve un mensaje si la Central fue modificada correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Central Updated'}
 *      404:
 *        description: The Central was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar Central
 *     tags: [Central]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la Central
 *
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje si la central pudo ser eliminada
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'central Deleted'}
 *       404:
 *         description: The Central was not found
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Central:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado de la Central
 *         name:
 *           type: String
 *           description: El nombre de la Central
 *         longitud:
 *           type: Number
 *           description: La longitud geográfica donde se encuentra la Central.
 *         latitud:
 *           type: Number
 *           description: La latitud geográfica donde se encuentra la Central.
 *       example:
 *         id: d5fEasz
 *         name: Brisas Ensenada
 *         longitud: 11.0001
 *         latitud: 40.200
 */
router.route('/')
    .get(getCentrales)
    .post(createCentral)
router.route('/:id')
    .get(getCentral)
    .put(updateCentral)
    .delete(deleteCentral)

module.exports = router;