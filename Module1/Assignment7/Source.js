function RollDice (rolls){
  let values = [];
  for (let roll = 0; roll < rolls; roll++){
    let dice = Math.floor(Math.random()*6+1);
    values.push(dice);
    let sum_values = values.reduce((acc, val) => acc + val, 0);
  document.querySelector("#target").innerHTML = "The dice values are: " + values + "The sum of dices are: " + sum_values;
  }
}

let question = parseInt(prompt("How many times to roll the dice?"));
RollDice(question);


