'use strict'


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
	document.write("<h2>Listado de números del arreglo "+textoCustom+": </h2><br/>")	//
	document.write("<ul>")
	for(let elementos in array){
	document.write("<li>"+array[elementos]+"</li>");
	}
document.write("</ul>");
}
mostrarArray(array);