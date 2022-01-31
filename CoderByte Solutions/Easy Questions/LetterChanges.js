// LetterChanges
//You have to replace the letter  with the letter after it, if the new letter is a vowel tou have to make it upperCase
// for Ex "Hello Everybody" => "Ifmmp fwfszcpEz"

function letterChanges (str) {
  str=str.toLowerCase()
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  var newAbc = 'bcdEfghIjklmnOpqrstUvwxyzA';
  var result = '';
  for (let i = 0; i < str.length; i++) {
    var num= abc.indexOf(str[i])
    if(num !== -1){
      result += newAbc[num]
    }else{
      result += str[i]
    }
  }
  return result
}

let text = "I have to work more"
console.log(letterChanges(text))
