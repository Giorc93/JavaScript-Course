'use strict'

var numero1 = parseInt(prompt("Ingrese el número: ", 0));
while(numero1 <= 0 || isNaN(numero1)){
	numero1 = parseInt(prompt("Ingrese nuevamente el número: ", 0));
}

if(numero1%2 != 0){ //Comprueba residuo de la división
	document.write("<h2> El número ingresado es impar.</h2>");
}else{
	document.write("<h2> El número ingresado es par.</h2>");
}
