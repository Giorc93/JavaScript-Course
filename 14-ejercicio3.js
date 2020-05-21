'use strict'

//Ejercicio 3
//Hacer un programa que muestre todos los números entre dos números ingresados por el usuario

var numero1 = parseInt(prompt("Ingrese el primer número: ", 0));	//Ingreso de datos por prompt
while(numero1 <= 0 || isNaN(numero1)){		//Comprobación de validez
	numero1 = parseInt(prompt("Ingrese nuevamente el primer número: ", 0));
}
var numero2 = parseInt(prompt("Ingrese el segundo número: ", 0));
while(numero2 <= 0 || isNaN(numero2)){
	numero2 = parseInt(prompt("Ingrese nuevamente el segundo número: ", 0));
}

if(numero1 > numero2){
	document.write("<h1>Del número "+numero1+" al número "+numero2+" están los siguientes números: <br/> </h1>")
	for( var contador = numero2; contador <= numero1; contador++){
		document.write(contador+"<br/>");
	}
}else if(numero1 == numero2){
		document.write("<h2>Los números ingresados son iguales. 	<br/> </h2>");
	}
else{
	document.write("<h1>Del número "+numero1+" al número "+numero2+" están los siguientes números: <br/> </h1>")//Imprime en el body
	for( var contador = numero1; contador <= numero2; contador++){
		document.write(contador+"<br/>");
	}
}
