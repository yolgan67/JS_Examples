
let celcius = document.getElementById("celcius")
let kelvin = document.getElementById("kelvin")
// let ckBtn =document.getElementById("ckBtn")
let fahreneit = document.getElementById("fahreneit")

//1.Yol tek celcius u kelvine çevirir
// celcius.addEventListener("input",celciusToKelvin)
// function celciusToKelvin(e) {
//   let celciusVal = Number(e.target.value)
//   console.log ( celciusVal)
//   let kelvinVal=celciusVal+273.15
//   console.log(kelvinVal)
//   kelvin.value = `${kelvinVal}`
// }

// 2.yol celciusu kelvine çevirir(html buton yoruma alındı )
// ckBtn.onclick= function (){
//   kelvin.value = Number(celcius.value) + 273.15
// }



// Diğer bir metot .onchange değişime bağlı atama yapıyor
// celcius.onchange= function (){
//   kelvin.value = Number(celcius.value) + 273.15
//   fahreneit.value = Number(celcius.value) *1.8 + 32 
  
// }
// // Celciusa değer girip entera basarsak veya baska bir yere click yaparsak değeri kelvine atar

// kelvin.onchange= function (){
//   celcius.value = Number(kelvin.value) - 273.15 
//   fahreneit.value = parseFloat(Number(celcius.value)) *1.8 +32
// }
// fahreneit.onchange= function (){
//   celcius.value = (Number(fahreneit.value) -32 )*5/9 
//   kelvin.value = Number(fahreneit.value) *5/9 + 459.67 
// }




celcius.oninput= function (){
  if(celcius.value ){
    kelvin.value = (Number(celcius.value) + 273.15).toFixed(2)
    fahreneit.value = (Number(celcius.value) *1.8 + 32) .toFixed(2)
  }
  else{
    kelvin.value="";
    fahreneit.value="";
  }
}

 kelvin.oninput= function (){
  if(kelvin.value){
    celcius.value = (Number(kelvin.value) - 273.15) .toFixed(2)
    fahreneit.value = (Number(celcius.value)*1.8 +32).toFixed(2)
  }
  else{
    celcius.value="";
    fahreneit.value="";
  }
}

fahreneit.oninput= function (){
  if(fahreneit.value){
  celcius.value = ((Number(fahreneit.value) -32 )*5/9) .toFixed(2)
  kelvin.value = (Number(celcius.value) *5/9 + 273).toFixed(2)
  }
   else {
    kelvin.value="";
    celcius.value="";
  }
}