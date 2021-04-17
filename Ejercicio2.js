//Ejercicio 2: Introduccion a programacion orientada a objetos
/*
*Crea un objeto "persona", deberá incluir los siguientes atributos:
- nombre: Mario
- edad : 12
- colorDeCabello : negro
*/
let persona={
  nombre:"Mario",
  edad:12,
  colorDeCabello:"negro",
}


/*
*Agrega 2 nuevos atributos a persona:
- colorFavorito
- hobbie
Puedes darle cualquier valor correspondiente a los atributos*/
persona.colorFavorito="rojo"
persona.hobbie="programar"

//Cambia el valor del atributo nombre. Puede ser por cualquier otro diferente al que ya tiene
persona.nombre="ramses"


//Elimina el atributo colorDeCabello de persona
delete persona.colorDeCabello

console.log (persona)

