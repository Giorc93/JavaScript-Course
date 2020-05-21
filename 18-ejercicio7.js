'use strict'

var numero1 = parseInt(prompt("Ingrese el número: ", 0));
while(numero1 <= 0 || isNaN(numero1)){
	numero1 = parseInt(prompt("Ingrese nuevamente el número: ", 0));
}

for( var multiplo = 0; multiplo <= 10; multiplo++){
	var resultado = numero1 * multiplo;
	document.write(numero1+" x "+multiplo+" = "+resultado+".<br/>");
}
