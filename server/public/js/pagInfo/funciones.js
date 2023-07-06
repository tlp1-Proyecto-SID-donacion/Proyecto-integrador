var botonPrincipal = document.querySelector('.desplegable');
var contenidoDesplegable = document.querySelector('.desplegable-content');


botonPrincipal.addEventListener('click', function() {
  
  contenidoDesplegable.classList.toggle('visible');
});

var botones = document.querySelectorAll('.toggle-button');
var articulos = document.querySelectorAll('.contenedor-3');

// Mostrar el primer artículo inicialmente
mostrarArticulo('articulo-1');

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function() {
    var articuloId = this.getAttribute('data-articulo');
    mostrarArticulo(articuloId);
  });
}

function mostrarArticulo(id) {
  console.log('ID del artículo:', id);
  for (var i = 0; i < articulos.length; i++) {
    console.log('ID del artículo actual:', articulos[i].id);
    if (articulos[i].id === id) {
      articulos[i].classList.add('visible');
    } else {
      articulos[i].classList.remove('visible');
    }
  }
}

const resultados = [
  { texto: "MEDICAMENTOS CON RESTRICCIONES ANTES DE DONAR SANGRE ", articulo: "articulo-1" },
  { texto: "MEDICAMENTOS SIN RESTRICCIONES ANTES DE DONAR SANGRE", articulo: "articulo-2" },
  { texto: "TIPOS DE SANGRE", articulo: "articulo-3" },
  { texto: "COMPATIBILIDAD DE SANGRE", articulo: "articulo-4" },
  { texto: "BENEFICIOS PARA SU ORGANIZMO POR DONAR SANGRE ", articulo: "articulo-5" },
  { texto: "?CADA CUÁNTO TIEMPO SE PUEDE DONAR¿", articulo: "articulo-6" },
  { texto: "?EN CUÁNTO TIEMPO RECUPERO LA SANGRE QUE DONÉ¿", articulo: "articulo-7" },
  { texto: "ENFERMEDADES QUE IMPIDEN LA DONACIÓN DE SANGRE", articulo: "articulo-8" },
  { texto: "NFERMEDADES QUE NO IMPÍDEN LA DONACIÓN DE SANGRE ", articulo: "articulo-9" },
  { texto: "Lugares donde ir a donar", articulo: "articulo-10" },
  { texto: "?Qué hacen con la sangre extraída¿", articulo: "articulo-11" }

];

function buscar(consulta) {
  const resultadosContainer = document.getElementById("resultados");
  resultadosContainer.innerHTML = "";

  if (consulta.trim() !== "") {
    const resultadosFiltrados = resultados.filter(resultado =>
      resultado.texto.toLowerCase().includes(consulta.toLowerCase())
    );

    resultadosFiltrados.forEach(resultado => {
      const resultadoButton = document.createElement("button");
      resultadoButton.textContent = resultado.texto;
      resultadoButton.classList.add("resultado-button");
      resultadoButton.addEventListener("click", () => {
        mostrarArticulo(resultado.articulo);
      });
      resultadosContainer.appendChild(resultadoButton);
    });
  }
}
