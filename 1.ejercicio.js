/* 1. Dado dos números ingresados por el usuario realizar 
las 4 operaciones básicas, suma, resta, multiplicación, división
 e imprimir las operaciones. Validar la división entre 0(cero).
Integrantes:
1.Nicolas Rivera Carrillo
*/
'use strict';
let num1 = parseFloat( prompt('Dame el primer valor'));
let num2 = parseFloat( prompt('Dame el segundo valor:'));

let division  ;
if (num2 !==0){
    division = num1 / num2
}
 else {
    console.log("El valor no es valido")
 }




alert("La suma es:" + (num1+num2) );
alert ("La resta es:" + (num1-num2));
alert ("La multiplicacion es:" + (num1*num2));
alert("La division es :" + (num1/num2));
