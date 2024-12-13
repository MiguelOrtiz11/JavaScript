function nombre(parametro1, parametro2, parametro3) {
  // Codigo a ejecutar
}

// Forma 1
function funcion1(a, b) {
  // Retorna la multiplicacion de a  y b
  return a * b;
}
console.log(funcion1(2, 3));

// Forma 2
function funcion2(a, b) {
  console.log(a * b);
}
funcion2(2, 3);

// Forma 3 - Declaracion de funcion tipo expresion
let c = function (a, b) {
  return a * b;
};
let resultado = c(2, 3);
console.log(resultado);
