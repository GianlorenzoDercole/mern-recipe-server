// connect to mongodb
const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/recipeApi'
mongoose.connect(uri)

const db = mongoose.connection


db.once('open', () => console.log(`connected to mongoDB on ${db.host}:${db.port}`))
db.on('error', err => console.log(`uh`, err))

// export modules
module.exports = {Recipe: require('./recipe')}
