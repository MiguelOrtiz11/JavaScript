// Realizar una funcion que, dado como dato de entrada una oracion,
// devuelva un arreglo con cada letra de la oracion

function arregloOracion(oracion) {
  for (let i = 0; i < oracion.length; i++) {
    let arreglo = [];
    arreglo.push(oracion[i]);
    console.log(arreglo);
  }
}

arregloOracion("Texto");

// solucion 2
function arregloOracionSplit(texto) {
  let palabras = texto.split("");
  console.log(palabras);
}

arregloOracionSplit("Texto");
