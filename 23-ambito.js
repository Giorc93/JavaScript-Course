'use strict'

function holaMundo(texto){
	
	var hola_mundo = "Texto dentro de función"; //Variable local, dentro de función.

	console.log(texto);
	console.log(numero,toString()); //.toString() Convierte el número a un String.
	console.log(hola_mundo);

}

var numero = 12; //Variable global
var texto = "Hola mundo soy una variable global.";
holaMundo(texto);
console.log(hola_mundo);