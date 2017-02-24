import game from '../';

const random = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const task = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const startGame = () => {
  if (startGame.valueOf() === startGame || startGame.valueOf() === operations.length) {
    startGame.valueOf = () => 0;
  }
  const numOperation = startGame.valueOf();
  const num = random();
  const num2 = random();
  let correctAnswers = 0;
  let question = '';
  switch (operations[numOperation]) {
    case '+':
      correctAnswers = num + num2;
      question = `${num} + ${num2}`;
      break;
    case '-':
      correctAnswers = num - num2;
      question = `${num} - ${num2}`;
      break;
    case '*':
      correctAnswers = num * num2;
      question = `${num} * ${num2}`;
      break;
    default: break;
  }
  startGame.valueOf = () => numOperation + 1;
  return [question, correctAnswers];
};

const gameCalc = () => game(task, startGame);

export default gameCalc;
