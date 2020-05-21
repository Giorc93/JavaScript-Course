'use strict'

//Ejercicio 5
//Mostrar todos los números divisores de un número introducido en un prompt

var numero1 = parseInt(prompt("Ingrese el número: ", 0));
while(numero1 <= 0 || isNaN(numero1)){
	numero1 = parseInt(prompt("Ingrese nuevamente el número: ", 0));
}

var contador = 1;
document.write("<h1>Los números divisores de "+numero1+" son: <br/> </h1>")

/*while(contador <= numero1){
	if(numero1%contador == 0){
	document.write(contador+"<br/>")
	contador++;
	}else{
		console.log(contador)
		contador++;
	}
}*/

for(contador = 1; contador <= numero1; contador++){

	if(numero1%contador == 0){		//Comprueba el residuo de la división
	document.write(contador+"<br/>")
	}
}