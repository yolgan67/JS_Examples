/*Number Reverse
Have the function NumberReverse(str) take the str parameter being passed which will be a string of numbers, and return a new string with the numbers in reverse order.
Examples
Input: "1 2 3"
Output: 3 2 1
Input: "10 20 50"
Output: 50 20 10
*/
function func(params) {
  let y = params.split(" ");
  y.sort((a, b) => b - a);
  console.log(y.join(" "));
}
let x = "10 20 30";
func(x);
