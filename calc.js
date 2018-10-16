// var age = prompt("What is your age?")
// var days = age * 365.25;
// alert(age + " years is roughly " + days + " days")

var age = Number(prompt("What is your age?"));

if(age < 0 ) {
  console.log("Come back once you're out of the womb");
}

if (age === 21) {
  console.log("Happy 21st Birthday!");
}

//if age is odd, not evenly divisble by two
if (age % 2 !== 0) {
  console.log("Your age is odd!");
}

//If age is a perfect square
if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!")
}
