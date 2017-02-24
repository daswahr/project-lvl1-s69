import game from '../';

const random = () => {
  const iter = (acc) => {
    if (acc.length === 3) {
      return acc;
    }
    const createdAcc = acc + Math.round(Math.random() * 10);
    return iter(createdAcc);
  };
  return parseInt(iter(''), 10);
};

const task = 'Balance the given number.';

const getBalance = (number) => {
  const arr = number.toString().split('').map(num => parseInt(num, 10)).sort();
  const iter = (nums) => {
    const lastId = nums.length - 1;
    const dif = nums[lastId] - nums[0];
    if (dif <= 1) {
      return nums;
    }
    const extra = (dif % 2 === 0 ? dif / 2 : (dif - 1) / 2);
    const first = nums[0] + extra;
    const last = nums[lastId] - extra;
    const createdNums = [first, ...nums.slice(1, lastId), last].sort();
    return iter(createdNums);
  };
  return parseInt(iter(arr).join(''), 10);
};

const startGame = () => {
  const num = random();
  const correctAnswers = getBalance(num);
  const question = `${num}`;
  return [question, correctAnswers];
};

const gameBalance = () => game(task, startGame);

export default gameBalance;