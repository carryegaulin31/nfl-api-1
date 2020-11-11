const express = require('express')
const bodyParser = require('body-parser')

const { getAllTeams, getTeamBySlug, saveNewTeam } = require('./controllers/teams')
const app = express()

app.get('/', getAllTeams)

app.get('/:id', getTeamBySlug)

app.post('/', express.json(), saveNewTeam)


app.listen(1338, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1338..')
})
