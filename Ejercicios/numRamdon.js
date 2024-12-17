// Hacer una funcion que haga de forma aleatoria un numero  entre 1 y 1000
// y que a ese numero le saque su mitad, el doble y su raiz cuadrada

function numeroAleatorio() {
  let numero = Math.floor(Math.random() * (1000 - 1) + 1);
  console.log(numero);
  console.log("Mitad del numero " + numero / 2);
  console.log("Doble del numero " + numero * 2);
  console.log("Raiz cuadrada del numero " + Math.sqrt(numero));
}
numeroAleatorio();
