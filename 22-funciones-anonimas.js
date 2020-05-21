'use strict'

//Funciones Anónimas
//Una función que no tiene nombre

/*
var pelicula = function(nombre){
	return "La pelicula es: "+nombre;
}
*/

function suma(numero1,numero2, sumaYmuestra, sumaXdos){
	
	var sumar = numero1+numero2;

	sumaYmuestra(sumar);
	sumaXdos(sumar);

	return sumar;
}
suma(10,20, function(dato){  //Función callbakc normal
	console.log("La suma es: "+dato)
},
dato => {  //Función flecha. Si lleva sólo un parámetro no es necesario utilizar () si lleva más si es necesario.
	console.log("La suma por dos es: "+(dato*2))
}
);
//Función Callback
//Una función anónima, que se le pasa como parámetro a otra función

