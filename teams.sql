CREATE DATABASE nfl;


USE nfl;

CREATE TABLE nfl (
    id INT auto_increment,
    location VARCHAR(255),
    mascot VARCHAR(255),
    abbreviation VARCHAR(255),
    conference ENUM('AFC', 'NFC'),
    division ENUM('North', 'South', 'East', 'West'),
    createdAt DATETIME DEFAULT NOW(),
    updateAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    primary key(id)
);

INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Buffalo','Bills', 'BUF', 'AFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Miami','Dolphins', 'MIA', 'AFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('New England','Patriots', 'NE', 'AFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('New York','Jets', 'NYJ', 'AFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Baltimore','Ravens', 'BAL', 'AFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Cincinnati','Bengals', 'CIN', 'AFC','AFC')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Cleveland','Browns', 'CLE', 'AFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Pittsburgh','Steelers', 'PIT', 'AFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Houston','Texans', 'HOU', 'AFC','South')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Indianapolis','Colts', 'IND', 'AFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Jacksonville','Jaguars', 'JAX', 'AFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Tennessee','Titans', 'TEN', 'AFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Denver','Broncos', 'DEN', 'AFC','West')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Kansas City','Chiefs', 'KC', 'AFC','West')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Los Angeles','Chargers', 'LAC', 'AFC','West')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Oakland','Raiders', 'OAK', 'AFC','West')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Dallas','Cowboys', 'DAL', 'NFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('New York','Giants', 'NYG', 'NFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('New York','Giants', 'NYG', 'NFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Philadelphia','Eagles', 'PHI', 'NFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Washington','Redskins', 'WSH', 'NFC','East')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Chicago','Bears', 'CHI', 'NFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Detriot','Lions', 'DET', 'NFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Green Bay','Packers', 'GB', 'NFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Minnesota','Vikings', 'MIN', 'NFC','North')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Atlanta','Falcons', 'ATL', 'NFC','South')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('New Orleans','Saints', 'NO', 'NFC','South')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Tampa Bay','Buccaneers', 'TB', 'NFC','South')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Arizona','Cardinals', 'ARI', 'NFC','West')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Los Angeles','Rams', 'LAR', 'NFC','West')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('San Francisco','49ers', 'SF', 'NFC','West')
INSERT INTO users(location, mascot, abbreviation, conference, division) Values ('Seattle','Seahawks', 'SEA', 'NFC','West')

USE nfl;

SHOW TABLES;
DESC users;

SELECT * from users;

SELECT mascot, abbreviation, division from users;

SELECT * from users where division = "West";