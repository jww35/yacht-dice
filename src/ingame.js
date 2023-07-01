const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");
const d4 = document.querySelector(".d4");
const d5 = document.querySelector(".d5");
const d6 = document.querySelector(".d6");
const btnRoll = document.querySelector(".roll-container__roll");

btnRoll.addEventListener("click", function () {
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  d1.innerHTML = randomNum;

  randomNum = Math.trunc(Math.random() * 6) + 1;
  d2.innerHTML = randomNum;

  randomNum = Math.trunc(Math.random() * 6) + 1;
  d3.innerHTML = randomNum;

  randomNum = Math.trunc(Math.random() * 6) + 1;
  d4.innerHTML = randomNum;

  randomNum = Math.trunc(Math.random() * 6) + 1;
  d5.innerHTML = randomNum;

  randomNum = Math.trunc(Math.random() * 6) + 1;
  d6.innerHTML = randomNum;
});
