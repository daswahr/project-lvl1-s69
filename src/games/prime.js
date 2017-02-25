import game from '../';

const random = () => (Math.floor(Math.random() * 100) + 1);

const task = 'Answer "yes" if number is prime otherwise answer "no"';

const isPrime = (n1) => {
  let start = 2;
  while (start <= Math.sqrt(n1)) {
    if (n1 % start < 1) {
      return false;
    }
    start += 1;
  }
  return n1 > 1;
};

const startGame = () => {
  const num = random();
  const correctAnswers = isPrime(num) ? 'yes' : 'no';
  const question = `${num}`;
  return [question, correctAnswers];
};

const gamePrime = () => game(task, startGame);

export default gamePrime;
