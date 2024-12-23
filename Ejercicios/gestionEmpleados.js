/* Se necesita gestionar la información de sus empleados. Se te pide desarrollar 
un programa que permita:

- Registrar empleados con datos como nombre, cargo, salario base y horas extra trabajadas.
- Calcular el salario total de cada empleado (incluyendo el pago por horas extra).
- Filtrar empleados con un salario total superior a un monto especificado.
- Generar un reporte en formato JSON. */

// 1. Base de datos de empleados
const empleados = [
  { nombre: "Ana", cargo: "Desarrollador", salarioBase: 30000, horasExtra: 10 },
  { nombre: "Carlos", cargo: "Diseñador", salarioBase: 25000, horasExtra: 5 },
  { nombre: "Laura", cargo: "Gerente", salarioBase: 40000, horasExtra: 15 },
  {
    nombre: "Pedro",
    cargo: "Soporte Técnico",
    salarioBase: 20000,
    horasExtra: 8,
  },
];

// 2. Tarifa por hora extra
const TARIFA_HORA_EXTRA = 100; // Monto en pesos por hora extra

// 3. Calcular el salario total de cada empleado
const calcularSalarioTotal = (empleado) => {
  const extra = empleado.horasExtra * TARIFA_HORA_EXTRA;
  return empleado.salarioBase + extra;
};

// 4. Crear un reporte con salarios totales
const generarReporte = (empleados) => {
  return empleados.map((empleado) => ({
    ...empleado, // Mantiene los datos originales del empleado
    salarioTotal: calcularSalarioTotal(empleado), // Agrega el salario total calculado
  }));
};

// 5. Filtrar empleados con salarios mayores a un monto específico
const filtrarPorSalario = (empleados, limite) => {
  return empleados.filter(
    (empleado) => calcularSalarioTotal(empleado) > limite
  );
};

// 6. Generar el reporte completo
const reporteCompleto = generarReporte(empleados);
console.log("Reporte completo de empleados:");
console.log(reporteCompleto);

// 7. Filtrar empleados con salario mayor a $35,000
const empleadosDestacados = filtrarPorSalario(empleados, 35000);
console.log("\nEmpleados con salario mayor a $35,000:");
console.log(empleadosDestacados);

// 8. Exportar el reporte como JSON (simulado)
const exportarReporteJSON = (reporte) => JSON.stringify(reporte, null, 2);
const jsonReporte = exportarReporteJSON(reporteCompleto);
console.log("\nReporte exportado en formato JSON:");
console.log(jsonReporte);
