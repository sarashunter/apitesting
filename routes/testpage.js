const path = require('path')

const express = require('express')
const router = express.Router()

/**
 * @swagger
 *  paths:
 *      /testpage/:
 *          get:
 *              summary: Returns index page
 *              tags: []
 *              responses:
 *                  '200':
 *                      description: sample page
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: integer
 */

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'pages', 'index.html'))
})

module.exports = router
