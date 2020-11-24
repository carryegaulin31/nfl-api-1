const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
// const { describe, it } = require('mocha')
const { teamsList, singleTeam, newTeam } = require('../mocks/teams')
const { getTeamByMascot, getAllTeams, saveNewTeam } = require('../../controllers/teams')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - teams', () => {
  describe('getAllTeams', () => {
    it('retrieves a list of teams from the database and calls response.send() with the list', async () => {
      const stubbedFindAll = sinon.stub(models.Teams, 'findAll').returns(teamsList)
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllTeams({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(teamsList)
    })
  })

  describe('getTeamByMascot', () => {
    it('retrieves the team associated with the provided mascot from the database and calls response.send with it', async () => {
      const request = { params: { mascot: 'Cowboys' } }
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }
      const stubbedFindOne = sinon.stub(models.Teams, 'findOne').returns(singleTeam)

      await getTeamByMascot(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { mascot: 'Cowboys' } })
      expect(stubbedSend).to.have.been.calledWith(singleTeam)
    })
  })

  describe('saveNewTeam', () => {
    it('accepts new team details and saves them as a new team, returning the saved record with a 201 status', async () => {
      const request = { body: newTeam }
      const stubbedSend = sinon.stub()
      const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
      const response = { status: stubbedStatus }
      const stubbedCreate = sinon.stub(models.Teams, 'create').returns(newTeam)

      await saveNewTeam(request, response)

      expect(stubbedCreate).to.have.been.calledWith(newTeam)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(newTeam)
    })
  })
})

