/*
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/


let compras = ['leche','tomates','detergente','azucar','limones','chocolate'];
//agregar
let add = compras.push('Aceite de Girasol');
console.log(compras);

//eliminar

let elim = compras.pop('Aceite de Girasol');
console.log(compras);


let pelis_Fav = [
    {titulo:'Hombres de honor', director:'George Tillman Jr.', año: 2000},
    {titulo:'El Diario de Bridget Jones', director:'Sharon Maguire.', año: 2001},
    {titulo:'El discurso del rey', director:'Tom Hooper.', año: 2011},
]

//metodo filter()
let  peli_post = pelis_Fav.filter(obj => obj.año > 2010)
console.log(peli_post);

//metodo map()

let titulos = pelis_Fav.map(tit=> tit.titulo);

console.log(titulos)

// metodo concat()
let tit_dir = pelis_Fav.map(tit=>tit.director.concat(tit.titulo));
console.log(tit_dir)

//factor de propagacion
