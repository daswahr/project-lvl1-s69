import game from '../';

const random = () => {
  return Math.floor(Math.random() * 100) + 1;;
};

const task = 'Answer "yes" if number odd otherwise answer "no".';

const startGame = () => {
  const num = random();
  const correctAnswers = num % 2 === 0 ? 'yes' : 'no';
  const question = num;
  return [question, correctAnswers];
};

const gameEven = () => game(task, startGame);

export default gameEven;