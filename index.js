const express = require('express')
const { getAllTeams, getTeamBySlug } = require('./controllers/teams')
const app = express()

app.get('/', getAllTeams)

app.get('/:id', getTeamBySlug)

app.listen(1338, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1338..')
})
