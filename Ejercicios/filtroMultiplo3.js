// Hacer una funcion que filtre todos los numeros que sean multiplos de 3
// en un arreglo que contenga los numeros del 1 al 100

// Crear el arreglo con los numeros

function solucionMia() {
  let numeros = [];
  for (let i = 1; i <= 100; i++) {
    numeros.push(i);
  }
  console.log(numeros);

  function filtrarMultiplosDeTres(numeros) {
    let numerosMultiplosTres = [];
    for (let j = 1; j <= numeros.length; j++) {
      if (numeros[j] % 4 === 0) {
        numerosMultiplosTres.push(numeros[j]);
      }
    }
    return numerosMultiplosTres;
  }

  let resultado = filtrarMultiplosDeTres(numeros);
  console.log(resultado);
}

function solucionYT() {
  let nums = [];
  let multiplos = [];
  for (let i = 1; 1 <= 100; i++) {
    nums.push(i);
  }
  console.log(`Este es el arreglo principal: $(nums)`);
  nums.filter((el) => {
    if (el % 3 === 0) multiplos.push(el);
  });
  console.log(multiplos);
}

solucionMia();
solucionYT();
