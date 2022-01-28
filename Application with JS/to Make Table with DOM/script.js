let button = document.getElementsByTagName("button")[0]

let inputBrand=document.getElementById("brand")
let inputModel=document.getElementById("model")
let inputYear=document.getElementById("year")

let tBody =document.getElementsByTagName("tbody")[0]


class Car {
  constructor(brand,model,year){
    this.brand = brand;
    this.model = model;
    this.year=year;
  }
}

let carData=[];
// button.onclick =()=>{

// }
function createData (){
  const newObj = new Car(inputBrand.value,inputModel.value,inputYear.value);
  carData.push(newObj)

  inputBrand.value ="";
  inputModel.value ="";
  inputYear.value="";
  showItems()
}

function showItems(){
  if(carData.length>0){
    for (let i = 0; i < carData.length; i++) {
    listCar = 
    `<tr>
    <td>${carData[i].brand}</td>
    <td>${carData[i].model}</td>
    <td>${carData[i].year}</td>
    </tr>`  
    }
    tBody.insertAdjacentHTML("beforeend",listCar)
  }
}

