const teamsList = [{
  id: 1,
  location: 'Buffalo',
  mascot: 'Bills',
  abbreviation: 'BUF',
  conference: 'AFC',
  division: 'East'
}, {
  id: 2,
  location: 'Miami',
  mascot: 'Dolphins',
  abbreviation: 'MIA',
  conference: 'AFC',
  division: 'East'
}]

const singleTeam = {
  id: 17,
  location: 'Dallas',
  mascot: 'Cowboys',
  abbreviation: 'DAL',
  conference: 'NFC',
  division: 'East'
}

const newTeam = {
  // eslint-disable-next-line max-len
  id: 33, location: 'Louisiana', mascot: 'Tiger', abbreviation: 'LSU', conference: 'Southeastern', division: 'Western'
}

module.exports = { teamsList, singleTeam, newTeam }
