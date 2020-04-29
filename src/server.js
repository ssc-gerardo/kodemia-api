const express = require('express')
// const koders = require('./usecases/koders')
const kodersRouter = require('./routes/koders')
const app = express()

app.use(express.json())
// montamos router de koders
app.use('/koders', kodersRouter)

// Todos los recursos y rutas se escriben en plural

/*
app.get('/koders', async (request, response) => {
  const allKoders = await koders.getAll()

  response.json({
    message: 'All koders',
    data: {
      koders: allKoders
    }
  })
})
*/

module.exports = app
