//Ejercicio1: Funciones
//Problema 1
/*
*Crea una función "muestraNombre"
*Debe de mostrar un mensaje que diga "Buenos dias, [tu nombre]" cada vez que sea llamada.
*/function muestraNombre (ash) {return "buenos dias, "  + ash}

console.log(muestraNombre("Ramses"))






//Problema 2
/*
*Crea una función "cuadrado"
*Esta debe recibir un numero entero como argumento y regresar el valor del cuadrado de dicho numero como resultado.
Ej: si x=4,cuadrado(x )=16
*/function cuadrado (numero) {return numero * numero

}

console.log(cuadrado(4))


//Problema 3
/*
*Crea una función "tiraDado"
*Al llamar a la función, esta debe de regresar un mensaje que incluya un numero generado al azar de 1 a 6.
Ejemplo:
"El dado dió 3"

Pista:
Recuerda Math.random() y Math.floor() de la presentacion
*/
 
function tiraDado(){
let dado=Math.floor (Math.random()*6+1)
return "el dado dio " +dado
}

console.log(tiraDado())
