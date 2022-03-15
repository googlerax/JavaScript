/*En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta. Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo". */

function primo(num) {
    for(let i = 2;i <= num-1;i++) {
    if(num % i == 0) {
    return false;
       }
    }
    return true;
 }
    
    
    for(let i=1;i<=10;i++) {
    
    if(primo(i)) {
    console.log('Es el numero '+ i +' y es primo'); 
    } else {
    console.log('Es el numero ' + i );
      }
    
  }