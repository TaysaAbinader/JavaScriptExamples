function range (end, start = 2, step = 1) {
  const range_list = []
  for (let n = start; n < end; n += step)
  {
    range_list.push(n)
  }

    return range_list;
}
function prime_number(range_list, given_number) {
  if (given_number === 0 || given_number === 1) {
    document.querySelector("#target").innerHTML = given_number +
          " is NOT a prime number.";
      return
  }

  console.log(range_list)
  for (let n of range_list)
    if (given_number % n === 0) {
      document.querySelector("#target").innerHTML = given_number +
          " is NOT a prime number.";
      return
    }

  document.querySelector("#target").innerHTML = given_number +
      " is a prime number.";
}

let question = parseInt(prompt("Give me an integer number:"));

prime_number(range(question), question);