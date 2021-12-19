//Write a function findMax that takes three arguments and returns their maximum.
let ex1 = prompt("write 1st number");
let ex2 = prompt("write 2nd number");
let ex3 = prompt("write 3th number");

function findMax(ex1, ex2, ex3) {
  console.log(Math.max(ex1, ex2, ex3));
  return findMax;
}
findMax(ex1, ex2, ex3);

//Declare a function name evensAndOdds. It takes a positive integer (from prompt) as parameter and prints out

let ex4 = prompt("Write a positive integer");
function evensAndOdds() {
  if (ex4 % 2 == 1) {
    console.log("And");
  } else {
    console.log("Odd");
  }
}
evensAndOdds(ex4);

//Write a function which generates a randomUserIp. Ex: 168.127.25.2

function randomUserIp() {
  let x = Math.floor(Math.random() * 255 + 1);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  let q = Math.floor(Math.random() * 255 + 1);

  console.log(`${x}.${y}.${z}.${q}`);
}
randomUserIp();

// // with return

// function randomUserIp(){
// let x=Math.floor(Math.random()*254+1);
// let y=Math.floor(Math.random()*200);
// let z=Math.floor(Math.random()*200);
// let q=Math.floor(Math.random()*254+1);
// let ip=(`${x}.${y}.${z}.${q}`)
// return (ip)
// }

// console.log(randomUserIp())

//Declare a function fullName and now it takes firstName, lastName as a parameters and it returns your full - name with the count of characters inside your name. "Mustafa TT - 10 karakter"
//Rewrite your function to print a result according to your name ending : Ex. "Mustafa'dan sevgilerle" , "Ali'den sevgilerle", "Fatoş'tan sevgilerle".
//Challenge: take names from prompt.

let firstName = prompt("your Name");
let lastName=prompt("last Name");

function fullName(){;
let fullName=(firstName+" "+lastName)
fullName=(fullName+" - "+fullName.length+" karakter");
console.log(fullName);

}
fullName()

function greeting() {
  let last1Letter = firstName.substring(firstName.length - 1);
  let last2Letter = firstName.substring(
    firstName.length - 2,
    firstName.length - 1
  );
  let last3Letter = firstName.substring(
    firstName.length - 3,
    firstName.length - 2
  );
  // console.log(last1Letter, last2Letter, last3Letter);

  //sertleşme varsa ve kalınsa veya son iki harf sessizse ve kalınsa
  if (
    ((last1Letter == "f" ||
      last1Letter == "s" ||
      last1Letter == "t" ||
      last1Letter == "k" ||
      last1Letter == "ç" ||
      last1Letter == "ş" ||
      last1Letter == "h" ||
      last1Letter == "p") &&
      (last2Letter == "a" ||
        last2Letter == "ı" ||
        last2Letter == "o" ||
        last2Letter == "u")) ||
    ((last1Letter == "f" ||
      last1Letter == "s" ||
      last1Letter == "t" ||
      last1Letter == "k" ||
      last1Letter == "ç" ||
      last1Letter == "ş" ||
      last1Letter == "h" ||
      last1Letter == "p") &&
      (last3Letter == "a" ||
        last3Letter == "ı" ||
        last3Letter == "o" ||
        last3Letter == "u"))
  ) {
    console.log(`${firstName}'tan Sevgilerle.`);
  }
  //sertleşme varsa ve inceyse veya son iki harf sessizse ve inceyse
  else if (
    ((last1Letter == "f" ||
      last1Letter == "s" ||
      last1Letter == "t" ||
      last1Letter == "k" ||
      last1Letter == "ç" ||
      last1Letter == "ş" ||
      last1Letter == "h" ||
      last1Letter == "p") &&
      (last2Letter == "e" ||
        last2Letter == "i" ||
        last2Letter == "ö" ||
        last2Letter == "ü")) ||
    ((last1Letter == "f" ||
      last1Letter == "s" ||
      last1Letter == "t" ||
      last1Letter == "k" ||
      last1Letter == "ç" ||
      last1Letter == "ş" ||
      last1Letter == "h" ||
      last1Letter == "p") &&
      (last3Letter == "e" ||
        last3Letter == "i" ||
        last3Letter == "ö" ||
        last3Letter == "ü"))
  ) {
    console.log(`${firstName}'ten Sevgilerle.`);
  }
  //sertleşme yoksa ve kalınsa Veya son harf kalınsa
  else if (
    (!(
      last1Letter == "f" ||
      last1Letter == "s" ||
      last1Letter == "t" ||
      last1Letter == "k" ||
      last1Letter == "ç" ||
      last1Letter == "ş" ||
      last1Letter == "h" ||
      last1Letter == "p"
    ) &&
      (last2Letter == "a" ||
        last2Letter == "ı" ||
        last2Letter == "o" ||
        last2Letter == "u")) ||
    last1Letter == "a" ||
    last1Letter == "ı" ||
    last1Letter == "o" ||
    last1Letter == "u"
  ) {
    console.log(`${firstName}'dan Sevgilerle.`);
  } else {
    console.log(`${firstName}'den Sevgilerle.`);
  }
}

greeting();
