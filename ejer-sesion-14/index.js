const botonClick= document.querySelector(".btn");

botonClick.addEventListener("click",()=>{
    alert("click en el botón aceptar");
})

//Jquery

$(".btn").click(()=>{
    console.log("Hola, estoy utilizando jQuery");
})