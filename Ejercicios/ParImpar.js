const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite un número: ", (respuesta) => {
  const numero = Number(respuesta); // Convertir la respuesta a número
  if (!isNaN(numero)) {
    // Verificar si es un número
    if (numero % 2 === 0) {
      console.log(numero + " es par");
    } else {
      console.log(numero + " es impar");
    }
  } else {
    console.log("Por favor, ingrese un número válido.");
  }
  rl.close(); // Cerrar la interfaz
});
