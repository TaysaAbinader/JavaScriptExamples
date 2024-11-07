let names, house
names = prompt("Give me your name, I give you your house")
house = Math.floor(Math.random()*4+1);
switch (house){
  case 1:
    house = "Ravenclaw";
    document.querySelector("#target").innerHTML = "Hello, " + name + " you're a " + house + "!";
    break;
  case 2:
    house = "Gryffindor";
    document.querySelector("#target").innerHTML = "Hello, " + name + " you're a " + house + "!";
    break;
  case 3:
    house = "HufflePuff";
    document.querySelector("#target").innerHTML = "Hello, " + name + " you're a " + house + "!";
    break;
  case 4:
    house = "Slytherin";
    document.querySelector("#target").innerHTML = "Hello, " + name + " you're a " + house + " :(";
    break
  default:
    document.querySelector("#target").innerHTML = "Hello, " + name + ", can't sort you :)";
}














