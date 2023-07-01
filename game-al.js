/*
const Score = ({ values }) => {
    let ace = 0;
    let twos = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let sixes = 0;
    let bonus = 0;
    let choice = 0;
    let fourK = 0;
    let fullH = 0;
    let sStr = 0;
    let lStr = 0;
  
    const FirstMaker = (num) => {
      const newValue = values.filter((value) => value === num);
      return newValue.reduce((a, b) => a + b, 0);
    };
  
    const bonusMaker = () => {};
  
    const choiceMaker = () => {
      const newValue = values;
      return newValue.reduce((a, b) => a + b, 0);
    };
  
    const fourKMaker = () => {
      const newValue = values;
      const result = newValue.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {});
      for (let key in result) {
        if (parseInt(result[key]) === 4) {
          return parseInt(key) * 4;
        }
      }
      return 0;
    };
  
    const fullHMaker = () => {
      const newValue = values;
      const result = newValue.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {});
      if (
        Object.keys(result).length === 2 &&
        (result[Object.keys(result)[0]] === 2 ||
          result[Object.keys(result)[0]] === 3)
      ) {
        return newValue.reduce((a, b) => a + b, 0);
      }
      return 0;
    };
  
    const sStrMaker = () => {
      let newValue = values;
      newValue = newValue.sort();
      let check = 0;
      for (let i = 0; i < newValue.length; i++) {
        if (newValue[i + 1] - newValue[i] === 1) {
          check += 1;
        }
      }
      if (check === 3) {
        return 15;
      }
      return 0;
    };
  
    const lStrMaker = () => {
      let newValue = values;
      newValue = newValue.sort();
      let check = 0;
      for (let i = 0; i < newValue.length; i++) {
        if (newValue[i + 1] - newValue[i] === 1) {
          check += 1;
        }
      }
      if (check === 4) {
        return 30;
      }
      return 0;
    };
  
    ace = FirstMaker(1);
    twos = FirstMaker(2);
    threes = FirstMaker(3);
    fours = FirstMaker(4);
    fives = FirstMaker(5);
    sixes = FirstMaker(6);
    bonus = bonusMaker();
    choice = choiceMaker();
    fourK = fourKMaker();
    fullH = fullHMaker();
    sStr = sStrMaker();
    lStr = lStrMaker();
  
    return (
      <ul>
        <li>Ace : {ace}</li>
        <li>Twos : {twos}</li>
        <li>Threes : {threes}</li>
        <li>Fours : {fours}</li>
        <li>Fives : {fives}</li>
        <li>Sixes : {sixes}</li>
        <li>Bonus : {bonus}</li>
        <li>Choice : {choice}</li>
        <li>4 of Kind : {fourK}</li>
        <li>Full house : {fullH}</li>
        <li>S straight : {sStr}</li>
        <li>L straight : {lStr}</li>
      </ul>
    );
  };
  
  export default Score;
  

  <li>Twos : {twos}</li>
        <li>Threes : {threes}</li>
        <li>Fours : {fours}</li>
        <li>Fives : {fives}</li>
        <li>Sixes : {sixes}</li>
        <li>Bonus : {bonus}</li>
        <li>Choice : {choice}</li>
        <li>4 of Kind : {fourK}</li>
        <li>Full house : {fullH}</li>
        <li>S straight : {sStr}</li>
        <li>L straight : {lStr}</li>
        <li>Yacht : {yacht}</li>
        <li>Total : {total}</li>
        */
