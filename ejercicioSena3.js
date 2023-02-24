//MIguel Angel Ortiz Escobar//
//Programa que calcule area y perimetro //

listaDeNumeros = [];
listaDeNumeros2 = [];

listaDeNumeros[0] = parseInt(promt("N1: "));
listaDeNumeros[1] = parseInt(promt("N2: "));
listaDeNumeros[2] = parseInt(promt("N3: "));
listaDeNumeros[3] = parseInt(promt("N4: "));
listaDeNumeros[4] = parseInt(promt("N5: "));

listaDeNumeros2[0] = parseInt(promt("N6: "));
listaDeNumeros2[1] = parseInt(promt("N7: "));
listaDeNumeros2[2] = parseInt(promt("N8: "));
listaDeNumeros2[3] = parseInt(promt("N9: "));
listaDeNumeros2[4] = parseInt(promt("N10: "));

listaDeNumeros = listaDeNumeros.concat(listaDeNumeros2);

listaDeNumeros.sort((a,b)=>{
    if(a == b){
        return 0;
    }
    if (a < b){
        return -1;
    }
    return 1;
})

console.log("lista completa ordenada ascendente: "+ listaDeNumeros);
console.log("lista completa ordenada descendente: "+ listaDeNumeros.reverse);
