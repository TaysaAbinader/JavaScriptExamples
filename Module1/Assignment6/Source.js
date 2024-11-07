function SquareRoot(number){
  let result = Math.sqrt(number);
  return  document.querySelector("#target").innerHTML = "The square root of " + number + " is " + result;
}


const question = confirm("Do you want to calculate the square root?");
switch (question){
  case true:
    number = parseInt(prompt("Give me a number, I'll give you it's square root:"));
    SquareRoot(number)
    break
  case false:
    document.querySelector("#target").innerHTML = "The square root is not calculated.";
}


