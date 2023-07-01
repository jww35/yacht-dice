//도큐먼트 정보 가져오기

const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");
const d4 = document.querySelector(".d4");
const d5 = document.querySelector(".d5");
const btnRoll = document.querySelector(".roll-container__roll");

const ace = document.querySelector(".ace");
const twos = document.querySelector(".twos");
const threes = document.querySelector(".threes");
const fours = document.querySelector(".fours");
const fives = document.querySelector(".fives");
const sixes = document.querySelector(".sixes");
const bonus = document.querySelector(".bonus");
const choice = document.querySelector(".choice");
const fourK = document.querySelector(".fourK");
const fullH = document.querySelector(".fullH");
const smallS = document.querySelector(".smallS");
const largeS = document.querySelector(".largeS");
const yacht = document.querySelector(".yacht");

//변수 선언
let diceNumbers = [0,0,0,0,0];

//주사위 랜덤 굴리기 시스템

btnRoll.addEventListener("click", function () {
  //주사위 굴리기
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

  //주사위 배열 만들기
  diceNumbers[0] = parseInt(d1.innerHTML);
  diceNumbers[1] = parseInt(d2.innerHTML);
  diceNumbers[2] = parseInt(d3.innerHTML);
  diceNumbers[3] = parseInt(d4.innerHTML);
  diceNumbers[4] = parseInt(d5.innerHTML);

  console.log(diceNumbers);
  scoreCalculator(diceNumbers);
});

//점수 계산 시스템
function scoreCalculator (list) {
  ace.innerHTML = basicMaker(list, 1);
  twos.innerHTML = basicMaker(list, 2);
  threes.innerHTML = basicMaker(list, 3);
  fours.innerHTML = basicMaker(list, 4);
  fives.innerHTML = basicMaker(list, 5);
  sixes.innerHTML = basicMaker(list, 6);
  choice.innerHTML = choiceMaker(list);
  fourK.innerHTML = fourKMaker(list);
  fullH.innerHTML = fullHMaker(list);
  smallS.innerHTML = smallSMaker(list);
  largeS.innerHTML = largeSMaker(list);
  yacht.innerHTML = yachtMaker(list);
}

//1,2,3,4,5,6 단일 점수 계산
function basicMaker (list, targetNum) {
  let value = 0;
  list.forEach(function(number) {
    if (number == targetNum) {
      value += number;
    }
  });
  console.log(targetNum + ":" + value);
  return value;
}

//초이스
function choiceMaker (list) {
  let value=0;
  list.forEach(function(number) {
    value += number;
  });
  console.log("choice :" + value);
  return value;
}

//4 of Kind
function fourKMaker (list) {
  let value=0;
  const result = {};
  list.forEach((x) => { 
    result[x] = (result[x] || 0)+1; 
  });
  if (JSON.stringify(Object.values(result)) == JSON.stringify([4,1]) || JSON.stringify(Object.values(result)) == JSON.stringify([1,4])) {
    list.forEach(function(number) {
      value += number;
    });
  }
  console.log("4ofK :" + value);
  return value;
}

//Full House
function fullHMaker (list) {
  let value = 0;
  const result = {};
  list.forEach((x) => { 
    result[x] = (result[x] || 0)+1; 
  });
  if (JSON.stringify(Object.values(result)) == JSON.stringify([3,2]) || JSON.stringify(Object.values(result)) == JSON.stringify([2,3])) {
    list.forEach(function(number) {
      value += number;
    });
  }
  console.log("fullHouse :" + value);
  return value;
}

//S.Straight
function smallSMaker (list) {
  let newValue = list;
  newValue = newValue.sort();
  let check = 0;
  for (let i = 0; i < newValue.length; i++) {
    if (newValue[i + 1] - newValue[i] === 1) {
      check += 1;
    }
  }
  if (check === 3) {
    console.log("small :" + 15);
    return 15;
  }
  console.log("small :" + 0);
  return 0;
}

//L.Straight
function largeSMaker (list) {
  let newValue = list;
  newValue = newValue.sort();
  let check = 0;
  for (let i = 0; i < newValue.length; i++) {
    if (newValue[i + 1] - newValue[i] === 1) {
      check += 1;
    }
  }
  if (check === 4) {
    console.log("large :" + 30);
    return 30;
  }
  console.log("large :" + 0);
  return 0;
}

//Yacht
function yachtMaker (list) {
  for(let i=1; i<4; i++) {
    if(list[i-1]!==list[i]) {
      console.log("yacht :"+0);
      return 0;
    }
  }
  console.log("yacht :"+50);
  return 50;
}
