import game from '../';

const random = () => (Math.floor(Math.random() * 7) + 1);

const newProgression = () => {
  const first = random();
  const progress = random() + 1;
  const iter = (acc) => {
    if (acc.length === 10) {
      return acc;
    }
    return iter([...acc, acc[acc.length - 1] + progress]);
  };
  return iter([first]);
};

const task = 'What number is missing in this progression?';

const startGame = () => {
  const progression = newProgression();
  const index = random();
  const correctAnswers = progression[index];
  progression[index] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswers];
};

const gameProgression = () => game(task, startGame);

export default gameProgression;
