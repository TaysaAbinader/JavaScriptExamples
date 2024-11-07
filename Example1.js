//variable define:
//var, let, const

//let x = 6
//console.log(typeof(x));
//number type: both int and float are numbers in JV
// bigInt: presents too large number that these mentioned number, cant work math module
//None (Python) = null (JV) - undefined
//convert variable type into another - to String(), parseInt(), parseFloat()
//console.log(typeof(x.toString()));
//console.log(1==1);
//console.log(1=="1");
//using === to compare values
//console.log(1 === "1");
// input and output:
//let name = window.prompt("Please type your name: ")
//console.log(name)
//alert("There is no bun today...voivoi")

//if (condition) {
//code lines
// }
//else {
// }

let ageUser = prompt("How old are you? Be honest")
if (ageUser < 18){
  alert("Ooopsi, this is too much for you to enter")
}
else {
  alert("Super welcome to join the club!")
}

const number = prompt("Give me a number to check: ")
if(number % 2 == 0) {
  console.log("The number is even")
}
else{
  console.log("The number is odd")
}

let age, weight, dose;
age = prompt("Enter your age: ");
if (age >= 18){
  dose = 500;
}
else if (1 < age < 17){
  weight = prompt("Enter your weight: ");
  dose = weight * 12.5;
}
if (dose > 500){
  dose = 500;
}
else{
  dose = 0;
}
console.log("The dose for you is:" + dose + "mg")

// switch case
let cabinClass = prompt("Enter the cabin class A/B/C");
switch(cabinClass){
  case 'A':
    console.log("Top deck cabin with sea view");
    break;
  case 'B':
    console.log("Top deck cabin without window");
    break;
  case 'C':
    console.log("Top deck cabin with no seaview");
    break;
  default:
    console.log("invalid cabin class")
}

//for loop:
let num = prompt("Enter a number to limit: ");
for (let i = 1; i<= num ; i ++){
  console.log(i);
}

//while loop:
while (num <= 0) {
  num = prompt("Your number is negative, give me another: ")
}
console.log("Your input was: " + num)

// do -while
let number;
do {
  number = Math.sqrt(Math.random()*2);
  console.log(number);
}
while (number < 3);

// function function_name(p1, pa2) {
//}
// class Circle{
//    constructor(p1, p2){
//        this.p1 = p1
//        this.p2 = p2
//}

let x = parseInt(prompt("Enter 1st number: "));
let y = parseInt(prompt("Enter 2nd number: "));
let swap;
swap = x;
x = y;
y = swap;
plus = x + y;
minus = x - y;
multi = x * y;
console.log("Value of 1st number after swapping: ", x);
console.log("Value of 2nd number after swapping: ", y);
console.log(plus);
console.log(minus);
console.log(multi);

function CheckLeapYear(year){
  if ((year%4 === 0) && (year % 100 !== 0) | (year % 400 === 0)){
    console.log("this year " + year + "is a leap year");
  } else{
    console.log("this year" + year + "is not a leap year");
  }
}

let year = prompt("Enter a year: ");
CheckLeapYear(year)

const vowels = ["a", "e", "o", "u", "i"];

function CountVowel(str){
  let count = 0;
  for(let letter of str.toLowerCase()){
    if (vowels.includes(letter)){
      count++;
    }
  }
  return count;
}
let string = prompt("Give me a string: ");
let CountNumber = CountVowel(string);
console.log(string);
console.log("The number of vowels in this given string is: " + CountNumber)


let n = prompt("Enter a name: ")
document.querySelector("#name").textContent = `Hello, ${n}`

