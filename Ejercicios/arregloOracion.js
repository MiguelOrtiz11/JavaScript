// Realizar una funcion que, dado como dato de entrada una oracion,
// devuelva un arreglo con cada letra de la oracion

function arregloOracion(oracion) {
  let arreglo = []; // Declarar el arreglo fuera del bucle
  for (let i = 0; i < oracion.length; i++) {
    arreglo.push(oracion[i]); // Agregar cada letra al arreglo
  }
  return arreglo; // Devolver el arreglo completo
}

console.log(arregloOracion("Texto"));

// solucion 2
function arregloOracionSplit(texto) {
  let palabras = texto.split("");
  console.log(palabras);
}

arregloOracionSplit("Texto");
