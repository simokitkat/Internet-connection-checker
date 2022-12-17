let button = document.getElementById("submit");
let list = document.querySelector("#list");
let h1 = document.querySelector(".heading");

function online() {
  h1.innerHTML = "You're now online!";
  h1.style.color = "green";
  list.classList.add("hide");
  button.classList.add("hide");
}

function offline() {
  h1.innerHTML = "You're now offline!";
  h1.style.color = "grey";
  list.classList.remove("hide");
  button.classList.remove("hide");
}

window.onload = function () {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};

window.addEventListener("online", function () {
  online();
});

window.addEventListener("offline", function () {
  offline();
});

button.addEventListener("click", function () {
  window.location.reload();
});
