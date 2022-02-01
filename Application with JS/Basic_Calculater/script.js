let button = document.querySelectorAll(".button")
let screen = document.querySelector("#screen")
let result = document.querySelector("#result")
let clean = document.querySelector("#clean")

for (let i = 0; i < button.length; i++) { 
  if(button[i].value !== "C" && button[i].value !== "="){
     button[i].addEventListener("click",function(){
          screen.value += this.value
    })
  }
}

result.addEventListener("click",function(){
  screen.value = eval(screen.value)
})

clean.addEventListener("click",function(){
  screen.value =""
})

