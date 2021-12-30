// 1.Complete the square sum function
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}


//2.Abbreviate a Two Word Name
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

//3.Remove First and Last Character

function removeChar(str) {
  return str.slice(1, -1);
}
console.log(removeChar("Yunus"))