let x, y, z;
x = parseInt(prompt("Give me an integer number:"));
y = parseInt(prompt("Give me another integer number:"));
z = parseInt(prompt("Give me a third integer number:"));
sum = x + y + z;
product = x * y * z;
average = sum / 3;
document.querySelector("#target").innerHTML = "Sum: " + sum + " ; " + "Product: " + product + " ; " + "Average: " + average + " ; ";




