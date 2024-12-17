// Hacer una funcion que filtre todos los numeros que sean multiplos de 3
// en un arreglo que contenga los numeros del 1 al 100

// Crear el arreglo con los numeros
let numeros = [];
for (let i = 1; i <= 100; i++) {
  numeros.push(i);
}

console.log(numeros);

function filtrarMultiplosDeTres(numeros) {
  let numerosMultiplosTres = [];
  for (let j = 1; j <= numeros.length; j++) {
    if (numeros[j] % 3 === 0) {
      numerosMultiplosTres.push(numeros[j]);
    }
  }
  return numerosMultiplosTres;
}

let resultado = filtrarMultiplosDeTres(numeros);
console.log(resultado);
