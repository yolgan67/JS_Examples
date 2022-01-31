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


//4. Salary increase calculation; Let there be an array of workers' salaries. Let's create a series of maps with a 15% increase in salary over 3000 TL and a 25% increase in watching over 3000 TL.

const salary = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const newSalary = salary.map(item => item>3000 ? item*1.15 : item*1.25)
console.log(newSalary)

