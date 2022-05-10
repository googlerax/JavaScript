/*En este ejercicio tienes que crear un archivo JavaScript donde crees una variable la cual contenga una cadena de texto.
Después crearás una función, dentro de ella crearas una variable que se llame igual que la primera que has creado y le asignaras una cadena de texto diferente a la primera y mostrarás la variable por consola.
Por último, fuera de la función tendrás que realizar la llamada a la función y mostrarás por consola la primera variable que has creado.*/

let texto ="hola,estoy aprendiendo JavaScript" /* variable global*/
console.log(texto)

function miFuncion(){
  let texto = "Estoy dentro de una funcion" /*variable local*/
  console.log(texto)
}
miFuncion()

console.log(texto)


// ejercicio num 2 resubido
/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/


const miArray = ['Griselda',36,false,new Date(1996,09,30),
{
    titulo:'Cronica de una muerte anunciada',
    autor: 'Gabriel Garcia Marquez',
    año: 1981
}
]

