//First Reverse
// You have to reverse all words
// for Ex "Hello World" => "olleH dlroW"

  function FirstReverse(str) {
       
   return str.split("").reverse().join("")
  }
  let text="Hello everyone from me"
  console.log(FirstReverse(text))