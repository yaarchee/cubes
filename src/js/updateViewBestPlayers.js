import playersTemplate from '../template/players.hbs';
import refs from './refs';
import { getPlayers } from './localStorageAPI';

const updateViewBestPlayer = {
  render() {
    refs.topPlayersTable.innerHTML = '';
    const players = getPlayers();
    const markup = playersTemplate(players);
    refs.topPlayersTable.insertAdjacentHTML('beforeend', markup);
  },
};

export default updateViewBestPlayer;
