class Year {

  constructor(start_year, end_year) {
    this.start_year = start_year;
    this.end_year = end_year;
    this.list_years = [];
    for (let year = this.start_year; year < this.end_year; year = this.start_year + 1) {
      this.list_years.push(year);
    }
  }

  leap_year() {
    let leap_years = []
    for (let year of this.list_years) {
      if (year % 4 === 0 | year % 400 === 0) {
        leap_years.push(year);
      }
        document.querySelector("#target").innerHTML = "These are the leap years of your interval: " + leap_year;
      }
      }
}

let start_year = parseInt(prompt("Tell me the start year:"));
let end_year = parseInt(prompt("Tell me the end year:"));
let years = Year(start_year, end_year)
years.leap_year()











