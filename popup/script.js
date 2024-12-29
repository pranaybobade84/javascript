const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-icon");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  popup.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  popup.classList.remove("open");
});
