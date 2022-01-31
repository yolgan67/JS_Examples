//1. 10'dan 0'a kadar olan sayıları geriye doğru olacak şekilde konsola yazdıralım.

/*
for(let i=10; i>=0; i--){
  console.log(i)
}
*/


//2.20 ile 40 arasındaki tüm sayıları konsola yazdırın.

/*
let i=20;
for(; i<=40; i++){
console.log(i)
}
*/

//3. 0 ve 50 sayıları arasından çift olanları konsola yazdıralım.

/*
for(let i=2; i<=50; i+=2){
console.log(i)
}

// or

for(let j=1; j<=50; j++){
 if(j % 2 == 0){
   console.log(j)
 }
}

*/
//4.JavaScript Program to Check Prime Number or Not

/*
// take input from the user
let number = parseInt(prompt("Please write an positive number"));
let isPrime = true;

if (number == 1) {
  console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
  // looping through 2 to number-1
  for (let x = 2; x < number; x++) {
    if (number % x == 0) {
      isPrime = false;
      break;
    }
}

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

*/

/*
//5.  What happens?
for (var i = 0; i <3; i++) {
  setTimeout(function () {alert(i);},1000+i);  
}



// alert 3 works 3 times

*/
