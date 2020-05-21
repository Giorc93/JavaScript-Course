'use strict'

//Arrays o Arreglos, Matrices

//Colección de tipos de datos que puede tener una variable

var nombre = "Geovanny Andres";
var lenguajes = ["PHP", "JS", "Go", "Java", "C#", "C", "Pascal"];
//Indices				0		,			1		,		2			,  3,	4
var nombres1 = new Array("Geovanny Andres", "Geovanny Ramirez", "Andres Cabarique", 26, true);

//Arrays avanzados

/*
var elemento = parseInt(prompt("¿Qué elemento del array quieres?: ", 0));
while(elemento >= nombres1.length){
	alert("Introduce un valor entre 0 y "+(nombres1.length - 1));
	elemento = parseInt(prompt("¿Qué elemento del array quieres?: ", 0));
}
alert(nombres[elemento]);
*/
document.write("<h2>Lenguajes de programación del 2018<br/></h2>");

/*
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){							//Forma tradicional de recorrer arrays.
	document.write("<li>"+lenguajes[i]+"</li>");
}
*/
document.write("</ul>");
/*
lenguajes.forEach((elemento,index,data)=>{							//elemento: Elemento del array. index: Posición del elemento. data: Array
	document.write("<li>"+elemento+"</li>");
});
*/

//For in

for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");      //Recorrer el array let variable in array
}

//Busquedas

var busqueda = lenguajes.find(function(lenguaje){		//.find busqueda en el array
	return lenguaje == "PHP"
});

console.log(busqueda)

//O

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"); 

console.log(busqueda);

//Busqueda de indice

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); 

console.log(busqueda);

//Comprobación del valores del array

var precios = [20, 40, 60, 80, 100];
var busqueda = precios.some(precio => precio >= 110);

console.log(busqueda); 