const {
  getTwoByConsole,
  getTwoByGenre,
  getGameByConsoleAndGenre,
  getGameByName,
  getGameByGenre,
} = require('./script');

const answer1 = getTwoByConsole('PS2');
const answer2 = getTwoByGenre('Survival Horror');
const answer3 = getGameByConsoleAndGenre('PS2', 'Survival Horror');
const answer4 = getGameByName('Resident evil 2');
const answer5 = getGameByGenre('Action');

const formatterAnswer1 = answer1.map(
  (answ) => `${answ.name} - ${answ.video_console} - ${answ.genres.join(' ')}`
);

const formatterAnswer2 = answer2.map(
  (answ) => `${answ.name} - ${answ.video_console} - ${answ.genres.join(' ')}`
);

const formatterAnswer3 = `${answer3.video_console} - ${answer3.genres.join(
  ' '
)} - ${answer3.name}`;

const formatterAnswer4 = `${answer4.video_console} - ${answer4.genres.join(
  ' '
)}`;

const formatterAnswer5 = answer5.map((answ) => ({
  name: answ.name,
  videoConsole: answ.video_console,
  genre: answ.genres.join(' '),
  isMultiGenre: answ.genres.length > 1,
}));

console.log('################');
console.log('Answer 1');
console.log(formatterAnswer1);
console.log('\n################');
console.log('Answer 2');
console.log(formatterAnswer2);
console.log('\n################');
console.log('Answer 3');
console.log(formatterAnswer3);
console.log('\n################');
console.log('Answer 4');
console.log(formatterAnswer4);
console.log('\n################');
console.log('Answer 5');
console.log(formatterAnswer5);
