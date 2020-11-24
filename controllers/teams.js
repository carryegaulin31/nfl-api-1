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

const saveNewTeam = async (request, response) => {
  const {
    id, location, mascot, abbreviation, conference, division
  } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: location, mascot, abbreviation, conference, division')
  }
  const newTeam = await models.Teams.create({
    id, location, mascot, abbreviation, conference, division
  })
  // eslint-disable-next-line max-len

  return response.status(201).send(newTeam)
}

const getTeamByMascot = async (request, response) => {
  try {
    const { mascot } = request.params

    const mascots = await models.Teams.findOne({ where: { mascot } })

    return response.send(mascots)
  } catch (error) {
    return response.status(404).send('Sorry not found')
  }
}

module.exports = { getTeamByMascot, getAllTeams, saveNewTeam }


