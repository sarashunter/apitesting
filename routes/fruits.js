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
 * paths:
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

const express = require('express')
const router = express.Router()

const fruits = require('../util/data')

router.get('/fruits', (req, res) => {
  res.status(200).json(fruits)
})

module.exports = router
