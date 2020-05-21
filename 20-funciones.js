'use strict'

//Funciones 
//Agrupación reutilizable de un conjunto de instrucciones.

//Definición de la función

function porConsola(numero1,numero2){				//Establece la función e ingresa los parámetros a utilizar en la misma.
		console.log("Suma: "+(numero1+numero2));
		console.log("Resta: "+(numero1-numero2));
		console.log("Multiplicación: "+(numero1*numero2));
		console.log("División: "+(numero1/numero2));
		console.log("************************************")
}

function porPantalla(numero1,numero2){
		document.write("Suma: "+(numero1+numero2)+"<br/>");
		document.write("Resta: "+(numero1-numero2)+"<br/>");
		document.write("Multiplicación: "+(numero1*numero2)+"<br/>");
		document.write("División: "+(numero1/numero2)+"<br/>");
		document.write("************************************")
}
function calculadora(numero1, numero2, mostrar = false){  //Parametros opcionales "mostrar"

	//Conjunto de instrucciones a ejecutar
	if (mostrar == false){
		porConsola(numero1,numero2);
	}else{
		porPantalla(numero1,numero2)
	}
}

//Invocar o llamar la función
calculadora(1,5)
calculadora(6,4,true)
/*
for(var i = 1; i <= 10; i++){
	console.log(i);
	calculadora(i, 5);
}
*/
 //Parametros opcionales

