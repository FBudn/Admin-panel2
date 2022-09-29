const burgerIcon = document.querySelector("#Burger");
const mobileAside = document.querySelector("#Aside");
const backGround = document.querySelector("#bGround");
const iconX = document.querySelector("#x-icon");

burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("hide");
  mobileAside.classList.toggle("active");
  backGround.classList.toggle("gray-background-on-click");
  iconX.classList.toggle("show-flex");
});

const burgerIconC = document.querySelector("#Burger");
const mobileAsideC = document.querySelector("#Aside");
const backGroundC = document.querySelector("#bGround");
const iconXC = document.querySelector("#x-icon");

iconXC.addEventListener("click", function () {
  burgerIconC.classList.toggle("hide");
  mobileAsideC.classList.toggle("active");
  backGroundC.classList.toggle("gray-background-on-click");
  iconXC.classList.toggle("show-flex");
});
