// Hacer una funcion que dado como dato de entrada  nuestra fecha de cumpleaños,
// nos diga cuantos dias faltan para el mismo

function faltaCumpleaños(a = "8 jun 2025") {
  let cumple = new Date(a);
  let hoy = new Date();
  let diasRestantes = Math.floor(
    (cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)
  );
  console.log(`Tu cumpleanios es ${cumple} y faltan ${diasRestantes} dias`);
}

faltaCumpleaños();
