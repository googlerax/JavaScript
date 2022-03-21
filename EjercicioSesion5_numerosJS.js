//En este ejercicio tendrás que generar 10 números aleatorios que estén comprendidos entre 0 y 20 haciendo uso de un bucle.

let a = 0

while (a < 10){
    a++
    let b=Math.random() * (20 - 0) + 0;
    b=Math.round(b)
    console.log('Numeros aleatorio:  '+ b)

}




