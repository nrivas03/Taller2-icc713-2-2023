const videoGames = require('./load-games.js');
const {
  getListOfUniqueRandomNumbers,
  getRandomNumber,
} = require('./utils/get-random.js');

const allGames = [...videoGames.GBA, ...videoGames.N64, ...videoGames.PS2];

// Get two games by console
function getTwoByConsole(videoGamesConsole) {
  const gamesByConsole = videoGames[videoGamesConsole];
  const randoms = getListOfUniqueRandomNumbers({
    min: 0,
    max: gamesByConsole.length,
    qty: 2,
  });
  const games = randoms.map((random) => {
    return gamesByConsole[random];
  });

  return games;
}

// Get three games by genre
function getTwoByGenre(genre) {
  const allGamesWithGenre = allGames.filter((game) =>
    game.genres.includes(genre)
  );

  if (allGamesWithGenre.length < 2) {
    throw new Error('Not enough games with the specified genre');
  }

  const randoms = getListOfUniqueRandomNumbers({
    min: 0,
    max: allGamesWithGenre.length,
    qty: 2,
  });

  const games = randoms.map((random) => {
    return allGamesWithGenre[random];
  });

  return games;
}


// Get one game by console and genre
function getGameByConsoleAndGenre(console, genre) {

  if (!allGames.some((game) => game.genres.includes(genre))) {
    throw new Error('Genre not found in any game');
  }

  if (!allGames.some((game) => game.video_console === console)) {
    throw new Error('Console not found in any game');
  }

  const allGamesByConsoleAndGenre = allGames.filter(
    (game) => game.genres.includes(genre) && game.video_console === console
  );

  const random = getRandomNumber(0, allGamesByConsoleAndGenre.length);

  return allGamesByConsoleAndGenre[random];
}

// Get game by name
function getGameByName(name) {
  const gameByName = allGames.find(
    (game) => game.name.toLowerCase() === name.toLowerCase()
  );

  return gameByName;
}

// Get games by genre
function getGamesByGenre(genre) {
  const gamesByGenre = allGames.filter((game) => game.genres.includes(genre));

  const limitedGames = gamesByGenre.slice(0, 5);

  return limitedGames;
}

module.exports = {
  getTwoByConsole,
  getTwoByGenre,
  getGameByConsoleAndGenre,
  getGameByName,
  getGamesByGenre,
};
