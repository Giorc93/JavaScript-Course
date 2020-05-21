'use strict'

//DOM - Document Object Model

function cambiaColor(color){
	caja.style.color = color;
}

//Conseguir elementos con un ID concreto

//var caja = document.getElementById("micaja");
	var caja = document.querySelector("#micaja");			//Invoca id 						//
	//var caja = document.querySelector("micaja");			//Invoca nombre de la etiqueta      // CSS
	//var caja = document.querySelector(".micaja"); 			//Invoca clase 						//

caja.innerHTML = "¡Texto en la caja desde JS!"; //Cambiar texto del elemento HTML
caja.style.background = "blue";  //Modificar color de fondo del elemento
caja.style.padding = "10px";  //Modificar tamaño del elemento 
caja.style.color = "white";  //Modificar color de texto

caja.className = "Hola Hola 2";

//Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
/*
var contenidoTexto = todosLosDivs[2];  //.textContent obtener el contenido de texto
contenidoTexto.innerHTML = "Otro texto para el elemento."; //.innerHTML permite cambiar el texto del elemento
console.log(contenidoTexto);
*/

var valor;
var seccion = document.querySelector("#miSeccion");		//Selecciona el elemento con id "miSeccion" y lo captura en la variable seccion
var hr = document.createElement("hr");		//Crea el elemento <hr>
var hr2 = document.createElement("hr");

for(valor in todosLosDivs){
	if (typeof todosLosDivs[valor].textContent == "string"){  //Comprobar si el elemento es "string" para imprimirlo en el body y evitar "undefined"
		var parrafo = document.createElement("p"); //Crea el elemento <p> en el HTML
		var texto = document.createTextNode(todosLosDivs[valor].textContent); //.textContent extrae el texto de cada elemento "valor" del conjunto de elementos HTML y .createTextNode crea el texto.
		parrafo.append(texto); //append ingresa al final; prepend ingresa al comienzo.
		seccion.append(parrafo); // Ingresa el parrafo al elemento tipo secction
	}
}

seccion.prepend(hr2);
seccion.append(hr);
	
//Conseguir elementos por su clase

var todosLosDivs2 = document.getElementsByClassName('rojo');  //Seleccion de divs por clase

for(valor in todosLosDivs2){
	if(todosLosDivs2[valor].className == "rojo"){ //Comprobar si el div es de clase "rojo" 
		var elementoR = todosLosDivs2[valor]; 
		elementoR.style.background = "red";  //Cambio de estilo del background de cada div
	}
}

//Query Selector. 

var id = document.querySelector("#encabezado");
id.style.background = "green";
var classname = document.querySelectorAll(".rojo");  //document.querySelector no arroja un array de elementos HTML como lo hace el getElementsBy... en su lugar se puede utilizar document.querySelectorAll y este arroja una lista de nodos.
console.log(classname);


