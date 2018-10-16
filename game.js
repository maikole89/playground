//create secretNumber
var secretNumber = 4;
//ask user for Guessing
var guess = Number(prompt("Guess a number"));
//check if guess is correct

if(guess === secretNumber) {
  alert("You got it right!");
}
//otherwise, you got it wrong
else if(guess > secretNumber) {
  alert("Too high, guess again!");
}
else {
  alert("Too low, guess again!")
}
