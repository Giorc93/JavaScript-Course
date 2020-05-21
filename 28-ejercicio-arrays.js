'use strict'

//Ejercicio arrays
/*
1.Pedir 6 numeros por pantalla y guardarlos en array
2.Mostrar todos los elementos del array en el body y en la consola
3.Ordenarlo y mostrarlo
4.Invertir el orden y mostrarlo
5.Mostrar cuántos elementos tiene el array
6.Busqueda de un valor introducido por el usuario que nos diga si está y si está decir la posición.
*/
var array = [];

for(var i = 1; i <= 6; i++){					//Establece el ciclo para pedir los números
		var numeros = parseInt(prompt("Introduzca los números del arreglo"));		//Ingreso de valores por prompt
		while(isNaN(numeros)){			//Condiciona la validez del valor ingresado
		alert("El valor ingresado es inválido. Intente nuevamente");
		numeros = parseInt(prompt("Introduce los números del arreglo"));
	}
		array.push(numeros);		//Agrega los elementos al array
	
}

console.log(array);	

function mostrarArray(elementos, textoCustom = ""){		//Función para mostrar el array con parámetros elemento y parámetro opcional en blanco textoCustom=""
	document.write("<h2>Listado de números del arreglo "+textoCustom+": </h2><br/>")	//Imprime el texto en el body y concatena el parámetro textoCustom
	document.write("<ul>")  //Crea el elemento <ul>
	for(let elementos in array){	//Recorre los elementos del array	
	document.write("<li>"+array[elementos]+"</li>");	//Imprime cada elemento del array
	}
document.write("</ul>");	//Cierra el elemento <ul>
}

mostrarArray(array);	//Utiliza la función mostrarArray sin el parámetro opcional

//Invertir y mostrar

array.reverse(function(a, b){return a-b});
mostrarArray(array, "invertidos");

//Ordenar y mostrar

array.sort(function(a, b){return a-b});
mostrarArray(array, "ordenados");

//Mostrar número de elementos en el array

var array_l = array.length;

document.write("<h2>El array tiene "+ array_l +" elementos. </h2><br/>");

//Busqueda del elemento introducido por el usuario

var busqueda = parseInt(prompt("Ingrese el elemento que desea buscar en el arreglo: "));
while(isNaN(busqueda)){
		alert("El valor ingresado es inválido. Intente nuevamente");
		busqueda = parseInt(prompt("Ingrese el elemento que desea buscar en el arreglo: "));
}
var resultado = array.some(elemento_b => elemento_b == busqueda);	//Emplea la busqueda .some busca el elemento del array y devuelve true o false

while(resultado != true){
	alert("El elemento buscado no se encuentra en el arreglo. Intente con otro elemento.");
	var busqueda = prompt("Ingrese el elemento que desea buscar en el arreglo: ");
	var resultado = array.some(elemento_b => elemento_b == busqueda);
}

var resultadoIndex = array.findIndex(elemento_b => elemento_b == busqueda);  //.findIndex encuentra la posición del elemento que se buscó y se comprobó la existencia en el array en el bloque anterior

document.write("<h2>El elemento: "+busqueda+" se encuentra en la posición: "+resultadoIndex+" del array. Y en la posición: "+(resultadoIndex+1)+" de la última lista.</h2><br/>");
