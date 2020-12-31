const express = require('express')
const router = express.Router()

const fruits = require('../util/data')

router.get('/', (req, res) => {
    res.status(200).json(fruits)
})

module.exports = router