
const nombre = 'Griselda';
const apellido = 'Sanchez';

const estudiante = `${nombre} ${apellido}`;
estudiante

const estudianteMayus = estudiante.toUpperCase();
estudianteMayus

const estudianteMinus = estudiante.toLowerCase()
estudiante

const num_Letras = estudiante.length;
num_Letras

const letra_Prim = nombre[0];
letra_Prim

const letra_Ulti = apellido[6];
letra_Ulti

const sin_espacios = estudiante.replace(' ','');

console.log(sin_espacios);

const encontrar = estudiante.includes('Griselda');
console.log(encontrar)