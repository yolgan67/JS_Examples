import { menu } from "./app.js";
console.log(menu);

// Genel Tanımlar
const btnContainer = document.getElementsByClassName("btn-container")[0];
const menuGroup = document.getElementsByClassName("section-center")[0];

//Buton Gruubun eklenmesi
const btnGroup = `
<button id="all" class="btn btn-outline-dark btn-item">All</button>
<button id="korea" class="btn btn-outline-dark btn-item">Korea</button>
<button id="japan"class="btn btn-outline-dark btn-item">Japan</button>
<button id="china" class="btn btn-outline-dark  btn-item">China</button>
`;
btnContainer.innerHTML = btnGroup;

//Butonların tanımlanması
const all = document.getElementById("all");
const korea = document.getElementById("korea");
const japan = document.getElementById("japan");
const china = document.getElementById("china");

//Yemek menu Item oluşturma
function meal(menu) {
  return `<div class="col-6 menu-items">
    <img class="photo" src=${menu.img} alt="" />
    <div class="menu-info">
    <div class="menu-title">
    <h4>${menu.title}</h4>
    <h4 > ${menu.price}</h4>
    </div>
    <div class="menu-text"> 
    ${menu.desc}
    </div>
    </div> 
    </div>`;
}

// Her Bir buton için addEvenListener Oluşturulması
all.addEventListener("click", function (e) {
  menuGroup.innerHTML = "";
  let allMenu = menu.forEach((item) => {
    menuGroup.innerHTML +=  meal(item);
  });
});

korea.addEventListener("click", function (e) {
  menuGroup.innerHTML = "";
  let koreanMenu = menu.filter((item) => item.category === "Korea");
  koreanMenu.forEach((item) => {
    menuGroup.innerHTML +=  meal(item);
  });
});

japan.addEventListener("click", function (e) {
  menuGroup.innerHTML = "";
  let japanMenu = menu.filter((item) => item.category === "Japan");
  japanMenu.forEach((item) => {
    menuGroup.innerHTML +=  meal(item);
  });
});

china.addEventListener("click", function (e) {
  menuGroup.innerHTML = "";
  let chinaMenu = menu.filter((item) => item.category === "China");
  chinaMenu.forEach((item) => {
    menuGroup.innerHTML +=  meal(item);
  });
});

//Sayfa ilk yüklendiğinde tüm menunun görünmesi 
window.addEventListener("load", function (e) {
  menuGroup.innerHTML = "";
  let allMenu = menu.forEach((item) => {
    menuGroup.innerHTML +=  meal(item);
  });
});
