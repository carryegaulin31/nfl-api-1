const express = require('express')
const teams = require('./teams')
const app = express()

app.get('/', (request, response) => {
  return response.render('index', { teams })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})
app.listen(1338, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1337..')
})
