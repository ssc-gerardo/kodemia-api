const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

// /koders/
router.get('/', async (request, response) => {
  const allKoders = await koders.getAll()
  response.json({
    message: 'all koders',
    data: {
      koders: allKoders
    }
  })
})

router.post('/', async (request, response) => {
  try {
    const newKoder = await koders.create(request.body)
    response.json({
      success: true,
      message: 'koder created',
      data: {
        koders: newKoder
      }
    })
  } catch (error) {
    const errorsArray = Object.entries(error.errors)
      .map(([key, value]) => {
        return { [key]: value.message }
      })

    response.json({
      success: false,
      error: error.message,
      errors: errorsArray
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderDeleted = await koders.deleteById(id)
    response.json({
      success: true,
      message: `koder with ${id} deleted`,
      data: {
        koder: koderDeleted
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const koderUdated = await koders.updateById(id, request.body)
    response.json({
      success: true,
      message: `koder with ${id} updated`,
      data: {
        koderUdated
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router
