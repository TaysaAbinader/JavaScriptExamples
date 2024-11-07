function RollDice(number){
    for (let roll in number){
      dice = Math.floor(Math.random())*6+1;
      document.querySelector("#target").innerHTML = "Roll: " + dice;
      const values = []
      values.push(dice);
      let sum = 0;
      values.forEach(value => sum += value);
    return  document.querySelector("#target").innerHTML = "Sum of rolls: " + sum;
}
}

const question = parseInt(prompt("How many times to roll the dice?"));
RollDice(question)


