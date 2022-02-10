/*Simple Evens
Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number.*/
function SimpleEvens(num) { 
num= num.toString().split("")
console.log(num)
let x = num.map(item=> {
return  item % 2 === 0?  true:false})

let y = x.every(item=>{
return  item === true? true:false})

return y
}
let x= 2222846
console.log(SimpleEvens(x) )
