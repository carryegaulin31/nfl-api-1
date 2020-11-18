const teams = require('../teams')
const models = require('../models')
/* const getAllTeams = (request, response) => {
  return response.send(teams)
} */
const getAllTeams = async (request, response) => {
  try {
    const teams = await models.Teams.findAll()

    return response.send(teams)
  } catch (error) {
    return response.status(404).send('Sorry not found')
  }
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


