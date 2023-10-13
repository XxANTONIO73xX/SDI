const {Router} = require('express');
const router = Router();
const {getCategorias, createCategoria, getCategoria, updateCategoria,
    deleteCategoria} = require('../controllers/categoria.controller');
/**
 * @swagger
 * tags:
 *   name: Categoria
 *   description: El gestor de las Categorias
 * /api/categorias:
 *   get:
 *     summary: Devuelve una lista de todas las Categorias
 *     tags: [Categoria]
 *     responses:
 *       200:
 *         description: Esta URL devuelve una lista de todas las Categorias en formato json
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 *   post:
 *     summary: Crea una nueva Categoria
 *     tags: [Categoria]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje indicando que se guardo correctamente. NOTA Remover paramentro 'id' es irrelevante.
 *         content:
 *           application/json:
 *             schema:
 *               example: {message: 'Categoria Saved'}
 *       500:
 *         description: Some server error
 * 
 * /api/categorias/{id}:
 *   get:
 *     summary: Obtener Categoria por id
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la Categoria
 *     responses:
 *       200:
 *         description: Esta URL devuelve la Categoria correspondiente al parametro id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: The Categoria was not found
 *   put:
 *    summary: Modificar la Categoria
 *    tags: [Categoria]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id de la Categoria
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Categoria'
 *    responses:
 *      200:
 *        description: Esta URL devuelve un mensaje si la Categoria fue modificada correctamente
 *        content:
 *          application/json:
 *             schema:
 *               example: {message: 'Categoria Updated'}
 *      404:
 *        description: The Categoria was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Eliminar Categoria
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id de la Categoria
 *
 *     responses:
 *       200:
 *         description: Esta URL devuelve un mensaje si la Categoria pudo ser eliminada
 *         content:
 *           application/json:
 *              schema:
 *                example: {message: 'Categoria Deleted'}
 *       404:
 *         description: The Categoria was not found
 */
// Aqui va el esquema
/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: String
 *           description: El id auto-generado de la Categoria
 *         name:
 *           type: String
 *           description: El nombre de la Categoria
 *       example:
 *         id: 6528b29c21f19d729c600b03
 *         name: Amigos
 */
router.route('/')
    .get(getCategorias)
    .post(createCategoria)
router.route('/:id')
    .get(getCategoria)
    .put(updateCategoria)
    .delete(deleteCategoria)

module.exports = router;