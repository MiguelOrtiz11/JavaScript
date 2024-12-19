/* Crear 5 objetos y almacenarlos en un arreglo, realizar una funcion para filtrar
todas las personas que tengan nombre Luis y esa misma funcion tambien muestre 
cuales son mayores de edad */

function objetosFiltrar() {
  let usuarios = [
    { nombre: "Luis", apellido: "Zapata", edad: 20 },
    { nombre: "Jairo", apellido: "Thiago", edad: 15 },
    { nombre: "Luis", apellido: "Guitierrez", edad: 10 },
    { nombre: "Jose", apellido: "Perea", edad: 25 },
    { nombre: "Josue", apellido: "Ortiz", edad: 40 },
  ];

  console.log("Personas de nombre Luis");
  usuarios.filter((el) => {
    if (el.nombre === "Luis") console.log(el.nombre + el.apellido);
  });

  console.log("Personas mayores de 18");
  usuarios.filter((el) => {
    if (el.edad >= 18) console.log(el.nombre + el.apellido + el.edad);
  });
}

objetosFiltrar();
