const express = require('express')
const bodyParser = require('body-parser')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const app = express()
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

app.use('/fruits', require('./routes/fruits'))
app.use('/testpage', require('./routes/testpage.js'))

const PORT = process.env.PORT || 3000

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Testing',
      version: '0.1.0',
      description: 'This is an app for swagger testing',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'Sara Hunter',
        email: 'sarashunter@gmail.com',
        url: 'http://blahs.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000/'
      }
    ]
  },
  apis: ['./routes/fruits.js', './routes/testpage.js']
}

const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.listen(PORT)

console.log(`Server listening on port: ${PORT}`)
