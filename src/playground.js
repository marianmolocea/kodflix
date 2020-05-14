function getScore(playerId, challengeId) {
  return Promise.all([getPlayer(playerId), getChallenge(challengeId)])
      .then(([player, challenge]) => {
          let { firstName } = player;
          let { score } = challenge;
          return `Player name: ${firstName}, Score: ${score}`;
      })
      .then(message => console.log(message));
}

function getPlayer(id) {
  let players = [
    {id: 1, firstName: 'Ian', lastName: 'Mo'},
    {id: 2, firstName: 'Cris', lastName: 'tiNa'},
  ]
  return players.find(player => player.id === id);
}

function getChallenge(id) {
  let challenges = [
    {id: 1, score: 45},
    {id: 2, score: 33}
  ]
  return challenges.find(challenge => challenge.id === id);
}
getScore(1, 2);