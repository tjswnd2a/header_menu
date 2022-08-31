const itemEl = document.querySelectorAll(".hollys .item");
const menuEl = document.querySelector(".hollys .nav");

for (let i = 0; i < itemEl.length; i++) {
  itemEl[i].addEventListener("mouseover", function (evnet) {
    menuEl?.classList.add("visible");
  });
  itemEl[i].addEventListener("mouseout", function (event) {
    menuEl?.classList.remove("visible");
  });
}
menuEl?.addEventListener("mouseover", function (evnet) {
  menuEl.classList.add("visible");
});

menuEl?.addEventListener("mouseout", function (evnet) {
  menuEl.classList.remove("visible");
});
