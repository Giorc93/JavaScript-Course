'use strict'

//Condicional IF
//Instrucciones de comparacion. Ejem: Si A es igual a B entonces haz algo.

var edad = 26;
var nombre = "Geovanny Ramirez";

/*
Operadores relacionales:
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Diferente: !=
*/

if(edad >= 18){
	console.log(nombre+" tiene: "+edad+", es mayor de edad");
	if(edad <= 33){
		console.log("Todavía eres millenial");
	}else if(edad >= 70){
		console.log("Eres anciano");
	}else{
		console.log("Ya no eres millenial");
	}
}else{
	console.log(nombre+" tiene: "+edad+", es menor de edad");
}


//Operadores logicos:

//AND(Y): &&
//OR(O): ||
//NOT(NO):!

var year = 2018;
//Negación
if(year != 2016){
	console.log("El año no es 2016, el año es: "+year);
}
//AND &&
if(year >= 2000 && year <=2020 && year != 2018){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en otra era");
}
//OR ||
if(year == 2008 || (year >= 2018 && year == 2028)){
	console.log("El año acaba en 8");
}else{
	console.log("El año no acaba en 8");
}