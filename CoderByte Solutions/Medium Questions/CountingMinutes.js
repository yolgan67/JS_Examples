/*Have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.*/

function CountingMinutes(str) { 
  let first =str.slice(0,str.indexOf('-'))
  console.log(first)
  let last= str.slice((str.indexOf('-')+1),str.length)
  console.log(last)
   let result;

  if(first.includes("am")){
     firstTime = first.slice(0,first.indexOf(':'))*60  + first.slice((first.indexOf(':')+1),(first.length)-2)*1
  }else{
    firstTime = (first.slice(0,first.indexOf(':'))*60) +720 + first.slice((first.indexOf(':')+1),(first.length)-2)*1
  }
    if(last.includes("am")){
     lastTime = last.slice(0,last.indexOf(':'))*60  + last.slice((last.indexOf(':')+1),(last.length)-2)*1
  }else{
    lastTime = (last.slice(0,last.indexOf(':'))*60) +720 + last.slice((last.indexOf(':')+1),(last.length)-2)*1
  }
  if(firstTime-lastTime < 0){
    result = Math.abs(firstTime-lastTime)
  }else{
    result= Math.abs(1440-(lastTime-firstTime))
  }
  console.log(firstTime)
  console.log(lastTime)
  // code goes here  
  return result; 

}

let x= "1:23am-1:08am"
let y="12:02pm-12:32pm"
let z="11:00am-2:10pm"
console.log(CountingMinutes(x));
