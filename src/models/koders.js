const moongose = require('mongoose')

const koderSchema = new moongose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  generation: {
    type: Number,
    required: true,
    min: 1
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// moongose.model('koders', koderSchema)

// module.export -> para decir lo que queremos que el script exporte

module.exports = moongose.model('koders', koderSchema)
