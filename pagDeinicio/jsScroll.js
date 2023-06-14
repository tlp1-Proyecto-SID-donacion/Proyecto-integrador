const imagen = document.getElementById("imgScroll");
const imagen1 = document.getElementById("imgScroll1");
const imagen2 = document.getElementById("imgScroll2");
const imagen3 = document.getElementById("imgScroll3");

const cargarImg1 = (entrada, observador) => {
  entrada.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible1");
    } else {
      entrada.target.classList.remove("visible1");
    }
  });
};
const cargarImg2 = (entrada, observador) => {
  entrada.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible2");
    } else {
      entrada.target.classList.remove("visible2");
    }
  });
};

const observerImg1 = new IntersectionObserver(cargarImg1, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
});

const observerImg2 = new IntersectionObserver(cargarImg2, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 1.0,
});

observerImg1.observe(imagen);
observerImg2.observe(imagen1);
observerImg1.observe(imagen2);
observerImg2.observe(imagen3);
