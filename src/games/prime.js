import game from '../';

const random = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const task = 'Answer "yes" if number is prime otherwise answer "no"';

const isPrime = (n1) => {
  let start = 2;
  while (start <= Math.sqrt(n1)) {
    if (n1 % start < 1) {
      return 'no';
    }
    start += 1;
  }
  return 'yes';
};

const startGame = () => {
  const num = random();
  const correctAnswers = isPrime(num);
  const question = `${num}`;
  return [question, correctAnswers];
};

const gamePrime = () => game(task, startGame);

export default gamePrime;
