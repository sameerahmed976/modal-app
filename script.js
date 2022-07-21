const openModal = document.querySelector(".open-modal ");
const closeBtn = document.querySelector(".close");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  openModal.classList.add("show-modal");
});

closeBtn.addEventListener("click", () => {
  openModal.classList.remove("show-modal");
});
