const opened = document.getElementById("opened");
const keys = document.querySelector(".keys");
const code = document.querySelector("#code");
const keyCode = document.querySelector("#keyCode");
const key = document.querySelector("#key");

document.addEventListener("keydown", (knopka) => {
  opened.classList.add("hidden");
  keys.classList.remove("hidden");

  code.textContent = knopka.code;
  keyCode.textContent = knopka.keyCode;
  key.textContent = knopka.key;
});
