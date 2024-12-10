//MIguel Angel Ortiz Escobar//
//Programa que calcule area y perimetro //
let figura = prompt("Ingrese un digito --> Triangulo = 1 Rectangulo = 2 Cuadrado = 3 Circulo = 4");
let base;
let altura;
let area;
let perimetroa;
let perimetrob;
let perimetroc;
let perimetrototal;
let radio;
const pi = 3.14

switch(figura){
    case "1":
        base = parseInt(prompt("Ingresa la base del triangulo: "));
        altura = parseInt(prompt("Ingrese la altura del triangulo: "))
        
        area = ((base*altura)/2);

        perimetroa = parseint(prompt("Ingrese el perimetro A"))
        perimetrob = parseint(prompt("Ingrese el perimetro B"))
        perimetroc = parseint(prompt("Ingrese el perimetro C"))
        perimetrototal = perimetroa + perimetrob + perimetroc

        console.log("El area del triangulo es de: " + area)
        console.log("El perimetro del triangulo es de: " + perimetrototal)

        break;

    case"2":
        base = parseInt(prompt("Ingresa la base del Rectangulo: "));
        altura = parseInt(prompt("Ingrese la altura del Rectangulo: "));
        
        area = (base*altura);

        perimetroa = parseint(prompt("Ingrese el perimetro A"));
        perimetrob = parseint(prompt("Ingrese el perimetro B"));
        perimetrototal = perimetroa + perimetrob;

        console.log("El area del rectangulo es de: " + area)
        console.log("El perimetro del rectangulo es de: " + perimetrototal)

    case"3":
        altura = parseInt(prompt("Ingrese la altura del cuadrado: "));

        area = Math.pow(altura, 2);
        perimetroa = (4 * altura)
        
        console.log("El area del cuadrado es de: " + area)
        console.log("El perimetro del cuadrado es de: " + perimetroa)
       
    case"4":
        radio = parseInt(prompt("Ingresa el radio del circulo: "));
        
        area = (pi * Math.pow(radio,2));
        perimetroa = (2 * pi * Math.pow(radio, 2));

        console.log("El area del circulo es de: " + area)
        console.log("El perimetro del circulo es de: " + perimetroa)    

    }