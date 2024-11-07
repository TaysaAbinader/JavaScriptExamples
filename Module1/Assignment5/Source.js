let year = prompt("Give me an year")
if (year % 4 === 0 | year % 400 === 0){
  document.querySelector("#target").innerHTML = year + " is a leap year.";
}
else{
  document.querySelector("#target").innerHTML = year + " is not a leap year.";
}

