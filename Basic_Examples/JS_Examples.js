// 1. JavaScript Program to Find the Square Root

/*
const number = prompt("Write a number")
const result = Math.sqrt(number)
console.log(`The square root of ${number} is ${result}`)
*/

// 2.JavaScript Program to Calculate the Area of a Triangle

/*
let baseValue = 10
let hightValue = 8
let areaValue= (baseValue*hightValue)/2
console.log( `The area of the triangle is ${areaValue}`)
*/

// f you know all the sides of a triangle, you can find the area  √(s(s-a)(s-b)(s-c));

/*
let a = 15
let b = 10
let c= 12
let s = ((a+b+c)/2)
let area= (Math.sqrt(s*(s-a)*(s-b)*(s-c))).toFixed(3)
console.log(`The area of the triangle is ${area}`)
*/

//3. Javascript Program to Solve Quadratic Equation ax2+by+c2=0;

/*
let root1,root2;
let a=prompt("Write the first value")
let b=prompt("wite the second value")
let c=prompt("write the third value")
console.log(`${a}*(x2) + ${b}*x +(${c})2`) 
let discriminant = ((b*b)-(4*a*c))
console.log(`Discriminant=${discriminant}`)
if (discriminant > 0){
  root1= (-b + Math.sqrt(discriminant))/(2*a);
  root2= (-b - Math.sqrt(discriminant))/(2*a);
  //result
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`) 
}
else if (discriminant==0){
  root1 = root2 = -b/(2*a)
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`)
}
else if (discriminant<0){
  let realPart = (-b/(2*a)).toFixed(3);
  let imagPart = (Math.sqrt(-discriminant)/(2*a)).toFixed(3)
  console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}
*/

// 4.JavaScript Program to Convert Kilometers to Miles

/*
 let km =prompt("Write a positive value in kilometers")
 let mil = (km) * (62137/100000)
 console.log(`${km} kilometers equal ${mil}miles`)
*/

// 5. Javascript Program to Convert Kelvin to Celsius and Fahrenheit

/*
let kelvin =prompt("Please give a Kelvin value")
let celsius = kelvin - 273.15
let fahrenheit = (celsius*1.8)+32
console.log(`If Kelvin value ${kelvin} K, Celsius value ${celsius} degree C and Fahrenheit value ${fahrenheit} F`)
*/

// 6. JavaScript Program to Check Prime Number
// program to check if a number is prime or not

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


