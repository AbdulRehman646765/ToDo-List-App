let input = document.getElementById("input");
let text = document.querySelector(".text");
const addButton = document.querySelector(".add-btn");

function add() {
  if (input.value == "") {
    alert("Please Enter Task!");
  } else {
    let newElement = document.createElement("ul");
    newElement.innerText = `${input.value}`;
    text.appendChild(newElement);

    // let editIcon = document.createElement("i");
    // editIcon.setAttribute("class", "fa-solid fa-pen-to-square edit-icon");
    // newElement.appendChild(editIcon);

    let trashIcon = document.createElement("i");
    trashIcon.setAttribute("class", "fa-solid fa-trash");
    newElement.appendChild(trashIcon);

    trashIcon.addEventListener("click", () => {
      newElement.remove();
    });

    input.value = "";
  }
}
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    document.querySelector(".add-btn").click();
  }
});

// const toDoHistory = JSON.parse(localStorage.getItem("toDoHistory")) || {};

// input.addEventListener("input", (e)=> {
//     toDoHistory.name = e.target.value;
//     localStorage.setItem("toDoHistory", JSON.stringify(toDoHistory))
//     newElement.innerText = e.target.value;

//     if (toDoHistory.name) {
//         newElement.innerText = toDoHistory.name;
//       }
// })