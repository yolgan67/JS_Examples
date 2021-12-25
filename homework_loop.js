// Exercises:Loops
// Iterate 0 to 10 using for loop, do the same using while and do while loop.

for(let x=0; x<=10; x++){
  console.log("for:",x)
}
let y=0;
while(y<=10){
  console.log("while:",y);
  y++;
}

let z=0;
do {
  console.log("do-while:",z); 
   z++;}
while (z<=10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop.

for(let j=10;  j>=0; j--){
  console.log("for:",j)
}
let t=10;
while(t>=0){
  console.log("while:",t);
  t--;
}

let k=10;
do{ 
  console.log("do-while:",k);
  k--;}
  while (k>=0);

// Write a loop that makes seven calls to console.log to output the following triangle:
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

let diyez=""
for (let i=1;i<7;i++){
  diyez+="#"
 console.log(diyez);}

// Iterate the array, ['HTML', 'CSS', 'JavaScript'] using a for loop and print out the items.

let it = ["HTML", "CSS", "JavaScript"]
for (let x=0;x<=it.length-1;x++){
  console.log(it[x]);
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for(let x=2;x<=100;x++){
  if(x % 2 == 0){
  console.log(x)
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers

for(let y=0;y<=100;y++){
  if(y % 2 ==1){
    console.log(y)
  }
}

// Use for loop to iterate from 0 to 100 and print and print the sum of all numbers.

let sum=0;
for (let index = 0; index <= 100; index++) {
  sum +=index
}
console.log(sum)  //5050

// The sum all numbers in a given number. Ex. 5465 => 5+4+6+5 => 20  

let ex=798654;
let num=ex.toString().split("")
console.log(num)

let sum=0;
for(i=0;i<=num.length-1;i++){
  sum +=Number(num[i])
}
console.log(sum)  //39


// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let even=0,odd=0;

for(i=1;i<=100;i++){
  if(i%2==0){
  even +=i
}
  else if(i%2==1) {
  odd +=i
}
}

console.log("even:",even);
console.log("odd:",odd)

//Develop a small script which generate a six characters random id:
//Ex.: 5j2khz

function makeId(length) {
  let result= "";
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let  charactersLength=characters.length

  for(let i=0; i<length; i++){
    result += characters.charAt(Math.floor(Math.random()*charactersLength))
 }
    return result;
}
console.log(makeId(6))


