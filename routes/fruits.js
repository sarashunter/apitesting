/**
 * @swagger
 *  components:
 *    schemas:
 *      Fruit:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the fruit.
 *          name:
 *            type: string
 *            description: The name of the fruit.
 *          createdAt:
 *            type: string
 *            format: date
 *            description: The date of the record creation.
 *        example:
 *           name: Kiwi
 * tags:
 *      name: Fruits
 *      description: API for fruits for swagger testing
 */

const express = require('express')
const router = express.Router()

const fruits = require('../util/data')
/**
 * @swagger
 *  paths:
 *      /fruits/:
 *          get:
 *              summary: Returns all the fruit
 *              tags: [Fruits]
 *              responses:
 *                  '200':
 *                      description: the list of fruits
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: integer
 */

router.get('/', (req, res) => {
  res.status(200).json(fruits)
})

/**
 * @swagger
 *  paths:
 *    /fruits/{id}:
 *      get:
 *        summary: Returns fruit with given id
 *        tags: [Fruits]
 *        parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The fruit id
 *        responses:
 *          '200':
 *            description: the list of fruits
 *            content:
 *              application/json:
 *                schema:
 *                  type: integer
 */
router.get('/:id', (req, res) => {
  const fruit = fruits.find(item => {
    return item.id == req.params.id
  })
  fruit ? res.status(200).json(fruit) : res.sendStatus(404)
})

/**
 * @swagger
 *  paths:
 *    /fruits/:
 *      post:
 *        summary: Creates a new fruit
 *        tags: [Fruits]
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *        responses:
 *          '200':
 *            description: The created fruit
 *            content:
 *             application/json:
 *               schema:
 *                type: object
 *                properties:
 *                  name:
 *                    type: string
 *
 */
router.post('/', (req, res) => {
  const { name } = req.body

  const fruit = {
    id: fruits.length + 1,
    name,
    createdAt: new Date()
  }

  fruits.push(fruit)
  res.status(201).json(fruit)
})

module.exports = router
