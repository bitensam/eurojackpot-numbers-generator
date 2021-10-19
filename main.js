const btn = document.querySelector('button');
const fiveNums = document.querySelector('.fiveNums');
const twoNums = document.querySelector('.twoNums');

const fiveNumsSet = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 45, 46, 47, 48, 49, 50,
];

const twoNumsSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numberGenerator = () => {
  let resultOfFive = [];
  let resultOfTwo = [];

  for (let i = 1; i <= 5; i++) {
    const indexOfFiveNumsSet = Math.floor(Math.random() * fiveNumsSet.length);
    resultOfFive.push(fiveNumsSet[indexOfFiveNumsSet]);
  }

  for (let i = 1; i <= 2; i++) {
    const indexOfTwoNumsSet = Math.floor(Math.random() * twoNumsSet.length);
    resultOfTwo.push(twoNumsSet[indexOfTwoNumsSet]);
  }

  fiveNums.textContent = `Your lucky numbers from 1 to 50 are: ${resultOfFive.toString()}`;
  twoNums.textContent = `Your lucky numbers from 1 to 10 are: ${resultOfTwo.toString()}`;
};

btn.addEventListener('click', numberGenerator);
