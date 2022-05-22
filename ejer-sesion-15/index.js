const nombre = "Griselda";
const apellido= "Sanchez";

const person = {nombre,apellido};

//console.log(person);

//LocalStorage:

localStorage.setItem("person",JSON.stringify("person"))

//sessionStorage

sessionStorage.setItem("person",JSON.stringify("person"))


//Cookie
const twoMinute=new Date()
document.cookie = `person=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`



