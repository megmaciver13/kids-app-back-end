const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/kidsapp', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
