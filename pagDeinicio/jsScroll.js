const imagen = document.getElementById("imgScroll");
const imagen1 = document.getElementById("imgScroll1");
const imagen2 = document.getElementById("imgScroll2");
const imagen3 = document.getElementById("imgScroll3");

const cargarImg = (entrada, observador) => {
  entrada.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
    } else {
      entrada.target.classList.remove("visible");
    }
  });
};

let observerImg = new IntersectionObserver(cargarImg, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
});

observerImg.observe(imagen);
observerImg.observe(imagen1);
observerImg.observe(imagen2);
observerImg.observe(imagen3);
