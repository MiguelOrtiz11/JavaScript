    //Miguel Angel Ortiz Escobar//

const prompt = require("prompt-sync")();
const funciones = require()

var personas = [];

var nombre = "";
var cedula = "";
var celular  = "";
var email  = "";
var ciudadResidencia  = "";
var ciudadOrigen  = "";
var fechaNacimiento  = "";
var artista  = "";
var cancion1  = "";
var cancion2  = "";  
var cancion3  = ""; 

    while (personas.length < 6){
        let reg = personas.length;
        console.log(`\nDigitar datos de usuario #${reg}`);
        nombre = funciones.validarDato(info = 'nombre');
        cedula = funciones.validarDoc(personas);
        celular = funciones.validarDato()
        email = funciones.validarDato(info = 'email');
        fechaNacimiento = funciones.validarDato(info = 'fecha');
        ciudadResidencia = funciones.validarDato(info = 'residencia');
        ciudadOrigen = funciones.validarDato(info = 'origen');
        artista = funciones.validarDato(info = 'artista');
        cancion1 = funciones.validarDato(info = 'cancion1');
        cancion2 = funciones.validarDato(info = 'cancion2');
        cancion3 = funciones.validarDato(info = 'cancion3');

        let usuario = {
            Nombre:nombre,
            Docummento:cedula,
            Celular:celular,
            Email:email,
            Ciudad_residencia:ciudadResidencia,
            Ciudad_origen:ciudadOrigen,
            Fecha_nacimiento:fechaNacimiento,
            Artista:artista,
            Cancion1:cancion1,
            Cancion2:cancion2,
            Cancion3:cancion3
        };
        personas.push(usuario);
    }
    var ganador = false;
    while(ganador == false){
        console.log('\n');    
        var opc= prompt("Opciones: realizar busqueda (b) - realizar sorteo (s): ");
        switch(opc){
            case"b":
                //realizar busquedas
                funciones.busqueda(personas);
            break;
            case"b":
                //sentencias para el sorteo
                funciones.sorte(personas);
                ganador = true;
            break;    
        }
    }
    console.log("\nEl sorteo ha acabado...")