//LetterCapitalize
// You have to UpperCase every first letter
// for Ex "hello everybody" => "Hello Everybody"

function letterCapitalize(str){
  let arr=[]
  newStr = str.split(" ")
  newStr.map(item=>console.log(arr.push(item[0].toUpperCase()+item.slice(1,item.length).toLowerCase())))
  console.log(newStr)
  return arr.join(" ")
  
  }
  let text="merhaba yENİ DünYa merHABA SAna"
  console.log(letterCapitalize(text))