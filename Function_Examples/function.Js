// 1. Addition two different number
/*
function addition(a, b) {
  let c = a + b;
  return c;
}
console.log(addition(8, 13));

// 2. Convert minutes to second
function convert(minute) {
  let second = minute * 60;
  return second;
}
console.log(convert(20));

//3. Covert Kelvin to Celsius and Fahrenneit with JS function

function temperature(Kelvin) {
  let Celsius = (Kelvin - 273.15).toFixed(2);
  let Fahrenneit = (((Kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
  let result = `${Kelvin} K , ${Celsius} C ve ${Fahrenneit} F ye eşittir`;
  return result;
}
console.log(temperature(300));

//4.When Do You Feed Cat

function feedTheCat(cat) {
  if (cat == "hungry") {
    return "feed the cat";
  } else {
    return "dont feed the cat";
  }
}
console.log(feedTheCat("hungry"));
console.log(feedTheCat("full"));

// or we can this example with fat function

/*
const feedTheCat= cat => {if(cat=="hungry"){return "feed the cat"} else{return "don't feed the cat"}}
console.log(feedTheCat("hungry"))
console.log(feedTheCat("full"))
*/

//5. Multiplying a sequence by 5 times and sorting
//////////////////
/*
let dizi = [2,5,8,11,17,15,12,21,19];

//Using the appropriate array methods, create a new array consisting of 5 times the elements of the array given above, each of which is greater than 10. (result should be [55, 75, 85].)

//We filtered the array for numbers greater than 10 with the filter method
let ondanBuyuk = dizi.filter (function(sayi){
return sayi>10
})
console.log(ondanBuyuk)

//we assign new value to array with map method
let besKati= ondanBuyuk.map(function(sayi){
  return sayi*5  
})
console.log(besKati)

// We sorted the array with the sort(a,b) method
let sirala = besKati.sort(function(a,b){
  return a-b
})
console.log(sirala)
*/

//6. Multiple all array elements

let dizi3 = [2,3,4];

//Write a function that returns the result (24) of multiplying the elements of the above array using the appropriate array method.

function indirgeyici (akumulator,sayi){
  return (akumulator*sayi)
}
const result =dizi3.reduce(indirgeyici)
console.log(result)

// 7. CoderByte function question b=?
(function (){ 
  var a=b=5}
) ()

//5
console.log(b) 
