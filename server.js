const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// set the view engine to ejs
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser())
app.use('/api', require('./routes/api'))
app.use(require('./routes/mainRoute'))
app.use(express.static('views'))
app.listen(8001)
console.log('Listening on port 8001...')