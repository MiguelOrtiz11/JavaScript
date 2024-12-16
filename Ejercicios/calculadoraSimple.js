/* Funcion que permita realizar 4 operaciones aritmeticas, la funcion recibe
 3 parametros a, b y la operacion, si el parametro de la operacion no es valido, 
 mandar error personalizado a la consola   
*/

function operacionesAritmeticas(a, b, operacion) {
  switch (operacion) {
    case "suma":
      return a + b;
      break;
    case "resta":
      return a - b;
      break;
    case "multiplicacion":
      return a * b;
      break;
    case "division":
      return a / b;
      break;
    default:
      console.error(`La operacion ${operacion} no es valida`);
      break;
  }
}

console.log(operacionesAritmeticas(2, 3, "suma"));
