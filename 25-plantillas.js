'use strict'

//Plantillas de Texto

var nombre = prompt("Introduce tu nombre: ", "");
var apellido = prompt("Introduce tus apellidos: ", "");

//var texto = "<h2>Mi nombre es: </h2> <br/>"+nombre+" "+apellido;

var texto = `
	<h1>Hola ¿Qué tal? <br/></h1> 
	<h3>Mi nombre es: ${nombre}<br/></h3>			
	<h3>Mis apellidos son: ${apellido}<br/><h3>
`;

// ${X} ingresa el valor de la variable X en la plantilla de texto

document.write(texto);
