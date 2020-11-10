const teams = require('../teams')

const getAllTeams = (request, response) => {
  return response.send(teams)
}

const getTeamBySlug = (request, response) => {
  const { id } = request.params

  const foundTeam = teams.find((team) => parseInt(team.id) === parseInt(id))

  return response.send(foundTeam)
}

module.exports = { getTeamBySlug, getAllTeams }


