import game from '../';

const random = () => (Math.floor(Math.random() * 100) + 1);

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (n1, n2) => (n2 % n1 === 0 ? n1 : gcd(n2 % n1, n1));

const startGame = () => {
  const num = random();
  const num2 = random();
  const correctAnswers = gcd(num, num2);
  const question = `${num}  ${num2}`;
  return [question, correctAnswers];
};

const gameGcd = () => game(task, startGame);

export default gameGcd;
