const teams = ['AC Milan', 'Inter Milan', 'Juventus', 'Torino','Bologna', 'Parma', 'Roma AC', 'Lazio','Fiorentina'];


class League {
  constructor(name, teams = [], config = {})
  {
    this.name = name;
    //this.rounds = config.rounds;
    this.matchDaySchedule = [];
    this.setup(config); 
    this.setupTeams(teams); 
  }

  setup(config){
    const defaultConfig = { rounds: 1 }
    this.config = Object.assign(defaultConfig, config)
  }

  setupTeams(teamNames) {
    this.teams = []; 
    for (const teamName of teamNames) {
        const team = this.customizeTeam(teamName); 
        this.teams.push(team); 
    }
  }

  customizeTeam (teamName){
    return {
        name: teamName,
        matchesWon: 0,
        matchesDraw: 0,
        matchesLost: 0,
      }
    }
  }

//LIGA FUTBOL 
class FootballLeague extends League {
  constructor(name, teams = [], config) {
    super(name, teams, config); 
  }
    setup(config) {
      const defaultConfig = {
        rounds: 1, 
        pointsPerWin: 3,
        pointsPerDraw: 1,
        pointsPerlose:0 
      }
      this.config = Object.assign(defaultConfig, config)
    }

    customizeTeam(teamName)
    {
      //llanar al método padre
      const customizeTeam = super.customizeTeam(teamName); 
      //devolver un objeto con los mismos datos del padre
      return {
        points: 0,
        goalsFor: 0,
        goalAgainst: 0,
        ...customizeTeam
      }
      // ademas añadir propiedades de goalsfor y goalsAgains 
    }
}

// const configFootballLeague = {
//   rounds: 2,
//   pointsPerWin: 10,
//   pointsPerDraw: 2,
//   pointsPerLose: -1, 
  
// }

// const playStationFootmallLeague = {
//   rounds: 1,
//   pointsPerWin: 2,
//   pointsPerDraw: 0,
//   pointsPerLose: -2,
// }

const serieA = new FootballLeague('Serie A', teams);

console.log(`The League name is ${serieA.name}`); 
// Motrar los equipos inscritos por pantalla.
for(let i in serieA.teams) {
  const team = serieA.teams[i];
  //const {matchesWon, matchesLost} = team; 
  console.log(team); 
}

//console.log('The teams are:', serieA.teams); 

