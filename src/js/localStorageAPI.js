function addPlayers(player) {
  localStorage.setItem('players', JSON.stringify([player, ...getPlayers()]));
}

function getPlayers() {
  if (localStorage.getItem('players')) {
    return JSON.parse(localStorage.getItem('players'))
      .sort(compare)
      .slice(0, 10);
  }
  return [];
}
function compare(a, b) {
  if (a.points > b.points) return -1;
  if (a.points < b.points) return 1;
  return 0;
}

export { addPlayers, getPlayers };
