// Realizar una tabla de multiplicacion desde 0 hasta x, pero
// que no se muestre la tabla del 5

function tablaMultiplicar(x) {
  for (let i = 1; i <= x; i++) {
    if (i === 5) {
      continue;
    }
    console.log(`Tabla del ${i}`);

    for (let j = 1; j <= 10; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
    console.log("--------------------");
  }
}

tablaMultiplicar(10);
