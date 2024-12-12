function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let salida = "";

    if (i % 3 === 0) {
      salida += "fizz";
    }
    if (i % 5 === 0) {
      salida += "buzz";
    }
    if (salida === "") {
      salida = i;
    }
    console.log(salida);
  }
}

fizzbuzz();
