const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser())
let arrayOfId
// app.use(bodyParser)
const databaseOperation = require('./taskDatabase')
app.get('/read', function (request, response) {
  databaseOperation.readtable()
    .then((result) => {
      arrayOfId = result[0].map((data) => {
        return data.id
      })
      response.json(result[0])
    })
    .catch((error) => {
      console.error(error)
    })
})

app.post('/write/:text', function (request, response) {
  const dataToBeInserted = request.params.text
  databaseOperation.add(dataToBeInserted)
    .then((result) => {
      response.send('Successfully added')
    })
    .catch((error) => {
      response.statusCode(500)
    })
})

app.put('/update/:id', function (request, response) {
  const idNumber = arrayOfId[request.params.id]
  // console.log(request.body)
  const description = request.body.description
  const status = request.body.status
  databaseOperation.update(idNumber, description, status)
    .then((result) => {
      response.send('Successfully Updated')
    })
    .catch((error) => {
      response.sendStatus(500)
    })
})

app.delete('/destroy/:linenumber', (request, response) => {
  let id = request.params.linenumber
  databaseOperation.delete(id)
    .then((result) => {
      response.send('Successfully Deleted')
    })
    .catch((error) => {
      response.sendStatus(500)
    })
})




module.exports = app
