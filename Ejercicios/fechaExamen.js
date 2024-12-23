/* Realizar una función que nos diga la fecha de apertura de un examen de la 
universidad, es decir. La cantidad de horas restantes que faltan para que abra 
dicho examen. En caso de que es, decir, la cantidad de horas restantes que faltan
para que abra dicho examen. En caso de que el examen haya cerrado que nos retorne 
un mensaje que diga "El examen ya cerró". */

function aperturaExamen(a) {
  let fechaExamen = new Date(a);
  let fechaActual = new Date();
  console.log(fechaActual);
  console.log(fechaExamen);

  let apertura =
    (fechaExamen.getTime() - fechaActual.getTime()) / (1000 * 60 * 60);
  console.log(apertura);
}

aperturaExamen("20 dec  2024 22:00");
