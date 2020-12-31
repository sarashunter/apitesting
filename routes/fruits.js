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
 *          colors:
 *            type: array
 *            description: The colors of the fruit
 *          createdAt:
 *            type: string
 *            format: date
 *            description: The date of the record creation.
 *        example:
 *           name: Kiwi,
 *           colors: ['green']
 *
*/        
const express = require('express')
const router = express.Router()

const fruits = require('../util/data')

router.get('/', (req, res) => {
    res.status(200).json(fruits)
})

module.exports = router