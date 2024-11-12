const diceNumber = parseInt(prompt("How many dices?"));
const diceValues = parseInt(prompt("What value to achieve?"));

let dice_roll = 0;
const roll_limit = 10000;
for (let i = 0; i < roll_limit; i++) {
  let dice_sum = 0;
  for (let d = 0; d < diceNumber; d++) {
    const dice = Math.floor(Math.random()*6+1);
    dice_sum += dice
    }
  if (dice_sum === diceValues) dice_roll ++;
    console.log(dice_sum, diceValues)
  }

const probability = (dice_roll/roll_limit)*100;
document.querySelector(`#target`).innerHTML = `Probability of ${probability.toFixed(2)}% of ${diceNumber} dices to hit ${diceValues}.`