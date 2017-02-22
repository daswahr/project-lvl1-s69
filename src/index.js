#!/usr/bin/node

import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');

const game = (task, startGame, steps = 3) => {
  console.log(`Welcome to the Brain Games!\n${task}`);
  const name = userName();
  const iter = (i) => {
    if (i === 0) {
      return console.log(`Congratulations, ${name}!`);
    }
    const [question, correctAnswers] = startGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer != correctAnswers) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswers}'.\nLet's try again, ${name}!`);
      return iter(i);
    }
    console.log('Correct!');
    return iter(i - 1);
  };
  return iter(steps);
};

export default game;