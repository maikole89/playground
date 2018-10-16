console.log("Print all numbers between -10 and 19")
  var countOne = -10

  while(countOne <= 19) {
    console.log("Number is: " + countOne);
    countOne++;

  }
console.log("Print all even numbers between 10 and 40")
var countTwo = 10

while(countTwo <=40){
  if(countTwo % 2 === 0)
  console.log(countTwo);
  countTwo+=1
}
console.log("Print all odd numbers between 300 and 333")
 var countThree = 300;

 while(countThree <= 333) {
   if(countThree % 2 !== 0){
     console.log(countThree);
   }
   countThree +=1;
 }
console.log("Print all numbers divisble by 5 AND 3 between 5 and 50.")

var countFour = 5;

while(countFour <= 50) {
  if(countFour % 5 === 0 && countFour % 3 === 0){
    console.log(countFour);
  }
  countFour +=1;
}
