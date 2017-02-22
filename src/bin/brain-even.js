import readlineSync from 'readline-sync';

const random = () => {
  return Math.floor(Math.random() * 100) + 1;;
};

const brainEven = (name) => {
  let i = 0;
  while (i !== 3) {
    const num = random();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });
    
    if (((num % 2 === 0) && (answer === true)) || ((num % 2 != 0) && (answer === false))) {
      console.log('Correct!');
      i += 1;
    } else {

      const correctAnswer = (num) => {
        if (num % 2 === 0) {
          return 'yes';
          }
        return 'no';
      };
      
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(num)}'`);
      console.log(`Let's try again, ${name}`);
    }
  }
};

  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${name}!\n`);
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  brainEven(name);
  console.log(`Congratulations, ${name}!`);