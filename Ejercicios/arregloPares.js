// Realizar una funcion que almacene en un arreglo  todos los numeros pares
// desde a hasta b

function arregloPares(a = 1, b = 9) {
  const pares = [];

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  console.log(pares);
}

arregloPares();
