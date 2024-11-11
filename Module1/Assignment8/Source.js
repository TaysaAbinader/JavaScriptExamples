let start_year = parseInt(prompt("The period stars in the year:"));
let end_year = parseInt(prompt("The period ends in the year:"));
let list_years = [];
let leap_years = [];

for (let year = start_year; year < end_year; year++){
  list_years.push(year);
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    leap_years.push(year);
    document.querySelector("#target").innerHTML = "These are the leap years: " + leap_years;
  }
}
