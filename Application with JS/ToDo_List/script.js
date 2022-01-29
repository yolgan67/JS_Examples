const textField = document.getElementById("task");
const addButton = document.getElementById("liveToastBtn");
const taskList = document.getElementById("list");

onLoad();
// Create a "close" button and append it to each list item
let listItem = document.getElementsByTagName("li");
let i;
for (i = 0; i < listItem.length; i++) {
  let span = document.createElement("span");
  let spanText = document.createTextNode("\u00D7");
  span.appendChild(spanText);
  span.className = "close";
  listItem[i].appendChild(span);
}

// Click on a close button to hide the current list item
const removeButton = document.getElementsByClassName("close");
let j;
for (let j = 0; j < removeButton.length; j++) {
  removeButton[j].onclick = function () {
    this.parentElement.remove();
  };
}

// Add a checked symbol
const okItem = function (e) {
  e.target.classList.contains("checked")
    ? e.target.classList.remove("checked")
    : e.target.classList.add("checked");
};

// Add a new Task from input form
const newElement = function (e) {
  let notSpace = textField.value.trim();

  if (notSpace.length > 0) {
    let toDoItem = document.createElement("li");
    toDoItem.textContent = textField.value;
    textField.value = "";
    taskList.appendChild(toDoItem);

    let span = document.createElement("span");
    let spanText = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(spanText);
    toDoItem.appendChild(span);

    for (i = 0; i < removeButton.length; i++) {
      removeButton[i].onclick = function () {
        this.parentElement.remove();
      };
    }
    $("#successToast").toast("show");
  } else if ((notSpace.length = 0)) {
    $("#errorToast").toast("show");
  }
};

//enter tuşu ile giriş yapma func.
textField.onkeydown = function (e) {
  if (e.keyCode == 13) {
    addButton.click();
  }
};

addButton.onclick = () => {
  let getLS = localStorage.getItem("ToDoList");

  if (getLS == null) {
    newArray = [];
  } else {
    newArray = JSON.parse(getLS);
  }
  newArray.push(textField.value);
  localStorage.setItem("ToDoList", JSON.stringify(newArray));
  newElement();
};

// sayfa yüklenince veriler kaybolmaması için func.
function onLoad() {
  let listArray = JSON.parse(localStorage.getItem("ToDoList"));
  if (listArray != null) {
    let toDoList;
    for (let i = 0; i < listArray.length; i++) {
      toDoList = `<li>${listArray[i]}</li>`;
      taskList.innerHTML += toDoList;
    }
  }
}

// li silinince local storgedan da silme func.(Bu kısım çalışmıyor)
removeButton.addEventListener("change", (e) => {
  console.log("merhana");
  let getLS = localStorage.getItem("ToDoList");
  listArray = JSON.parse(getLS);

  localStorage.removeItem(listArray[e.target]);
  localStorage.setItem("ToDoList", JSON.stringify(listArray));
});

taskList.addEventListener("click", okItem);
addButton.addEventListener("click", newElement);
