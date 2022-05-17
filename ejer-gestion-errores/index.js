/*Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal */



const nombre = "Griselda";
const apellido = "Sanchez";

const estudiante = `${nombre} ${apellido}`;


const estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);


const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

const num_Letras = estudiante.length;
console.log(num_Letras);


const letra_Prim = nombre[0];
console.log(letra_Prim);

const letra_Ulti = apellido[6];
console.log(letra_Ulti);


const sin_espacios = estudiante.replace(" ","");
console.log(sin_espacios);

const encontrar = estudiante.includes("Griselda");
console.log(encontrar);