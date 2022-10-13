'use strict';
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(num);
let setMess = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMess('no num');
  }

  //equal  guess
  else if (guess === num) {
    setMess('correct');
    document.querySelector('.score').textContent = String(score);
    document.querySelector('.number').textContent = num;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = String(highscore);
    }
  }
  //high guess
  else if (guess !== num) {
    if (score > 1) {
      setMess(
        guess > num ? 'guess is higher than num' : 'guess is lower than num'
      );

      score--;
      document.querySelector('.score').textContent = String(score);
    } else {
      setMess('you have lost');
    }
  }
});
// again btn

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  console.log(num);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  setMess('guess num');
  document.querySelector('.score').textContent = String(score);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
