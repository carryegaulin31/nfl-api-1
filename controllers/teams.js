const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const saveNewTeam = (request, response) => {
  const {
    id, location, mascot, abbreviation, conference, division
  } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: location, mascot, abbreviation, conference, division')
  }
  const newTeam = {
    // eslint-disable-next-line max-len
    id: 33, location: 'Louisiana', mascot: 'Tiger', abbreviation: 'LSU', conference: 'Southeastern', division: 'Western'
  }

  teams.push(newTeam)

  return response.send(newTeam)
}

const getTeamBySlug = (request, response) => {
  const { id } = request.params

  const foundTeam = teams.find((team) => parseInt(team.id) === parseInt(id))

  return response.send(foundTeam)
}

module.exports = { getTeamBySlug, getAllTeams, saveNewTeam }


