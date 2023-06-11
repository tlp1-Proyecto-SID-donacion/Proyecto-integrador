const sliderr = document.querySelector("#slider");
let sliderSecttion = document.querySelectorAll(".sliderSeection"),
  sliderSecttionLast = sliderSecttion[sliderSecttion.length - 1];

const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

sliderr.insertAdjacentElement("afterbegin", sliderSecttionLast);

function next() {
  let sliderSecttionFirst = document.querySelectorAll(".sliderSeection")[0];
  sliderr.style.marginLeft = "-200%";
  sliderr.style.transition = "all .5s";
  setTimeout(() => {
    sliderr.style.transition = "none";
    sliderr.insertAdjacentElement("beforeend", sliderSecttionFirst);
    sliderr.style.marginLeft = "-100%";
  }, 500);
}
function prev() {
  let sliderSecttion = document.querySelectorAll(".sliderSeection"),
    sliderSecttionLast = sliderSecttion[sliderSecttion.length - 1];
  sliderr.style.marginLeft = "0%";
  sliderr.style.transition = "all 0,5";
  setTimeout(() => {
    sliderr.style.transition = "none";
    sliderr.insertAdjacentElement("afterbegin", sliderSecttionLast);
    sliderr.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", function () {
  next();
});
btnLeft.addEventListener("click", function () {
  prev();
});

setInterval(() => {
  next();
}, 3000);
