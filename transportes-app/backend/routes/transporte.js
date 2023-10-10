const {Router} = require('express');
const router = Router();
const {getTransportes, createTransporte, getTransporte,
    updateTransporte, deleteTransporte} = require('../controllers/transporte.controller');
/**
 * @swagger
 * tags:
 *   name: Transporte
 *   description: El gestor de los Transportes
 * /api/transportes:
 *   get:
 *     summary: Devuelve una lista de todos los Transportes
 *     tags: [Transporte]
 *     responses:
 *       200:
 *         description: Esta URL devuelve una lista de todos los transportes en formato json
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transporte'
 *   post:
 *     summary: Crea un nuevo Transporte
 *     tags: [Transporte]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transporte'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Transporte Saved'}
 *       500:
 *         description: Some server error
 * 
 * /api/transportes/{id}:
 *   get:
 *     summary: Obtener Transporte por id
 *     tags: [Transporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del Transporte
 *     responses:
 *       200:
 *         description: Esta URL devuelve el Transporte correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transporte'
 *       404:
 *         description: The Transporte was not found
 *   put:
 *    summary: Modificar los datos del Transporte
 *    tags: [Transporte]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del Transporte
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Transporte'
 *    responses:
 *      200:
 *        description: Esta URL devuelve un mensaje si el Transporte fue modificado correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Transporte Updated'}
 *      404:
 *        description: The Transporte was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar Transporte
 *     tags: [Transporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del Transporte
 *
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje si el Transporte pudo ser eliminado
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Transporte Deleted'}
 *       404:
 *         description: The Transporte was not found
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Transporte:
 *       type: object
 *       required:
 *         - numeroUnidad
 *         - estado
 *         - idCentral
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado del Transporte
 *         numeroUnidad:
 *           type: String
 *           description: El numero o código del Transporte
 *         estado:
 *           type: String
 *           description: El estado en el que se encuentra el Transporte (Optimo, Bien, Mal, Muy Mal)
 *         idCentral:
 *           type: String
 *           description: El id de la central a la que pertenece el Transporte
 *       example:
 *         id: d5fEasz
 *         numeroUnidad: 24F
 *         estado: Optimo
 *         idCentral: 6524d14e82ea98549a4e27ad
 */
router.route('/')
    .get(getTransportes)
    .post(createTransporte)
router.route('/:id')
    .get(getTransporte)
    .put(updateTransporte)
    .delete(deleteTransporte)

module.exports = router;