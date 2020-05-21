'use strict'

//Transformación de textos 

var numero = 444;
var texto1 = "  Bienvenido al curso de JavaScript.  ";
var texto2 = "  Curso de JavaScript desde cero.  ";

var dato1 = numero.toString();		//Transforma el número a string
	dato1 = texto1.toUpperCase();	//Transforma el string a mayúsculas
var	dato2 = texto2.toLowerCase();	//Transforma el string a minúsculas

console.log(dato1);
console.log(dato2);

//Calcular longitud

var nombre = "Geovanny Andres";
	nombre = ["Geovanny", "Andres", "Ramirez"];
console.log(nombre.length);		//.length calcula la longitud del elemento, incluye espacios

//Concatenar

//var texto_total = texto1+texto2;
var texto_total = texto1.concat(" "+texto2); 
console.log(texto_total);

//Métodos de busqueda

var busqueda = texto1.indexOf("curso"); //Indica la posición en donde comienza el resultado buscado.
console.log(busqueda);

var busqueda2 = texto1.lastIndexOf("curso"); //Indica la posición en donde comienza el último resultado buscado.
console.log(busqueda2);

var busqueda3 = texto1.search("curso"); //Devuelve la posición donde comienza el resultado de la busqueda, devuelve -1 si no se encuentra
console.log(busqueda3);

var busqueda4 = texto1.match(/curso/g); // Para realizar busqueda global /curso/g .
console.log(busqueda4);

var busqueda5 = texto1.substr(14,5); //Saca los caracteres desde la posición 14 hasta 5 caracteres después.
console.log(busqueda5);

var busqueda6 = texto1.charAt(0); //Saca el caracter ubicado en la posición 0.
console.log(busqueda6);

var busqueda7 = texto1.startsWith("Bienvenido"); //Devuelve true o false si el string comienza con los caracteres indicados.
console.log(busqueda7);

var busqueda8 = texto1.endsWith("curso."); //Devuelve true o false si el string termina con los caracteres indicados.
console.log(busqueda8);

var busqueda9 = texto1.includes("JavaScript"); //Devuelve true o false si el string contiene los caracteres indicados.
console.log(busqueda9);

var busqueda10 = texto1.replace("JavaScript", "JS"); //Reemplaza la palabra.
console.log(busqueda10);

var busqueda11 = texto1.slice(14,22); //Separa y corta el string desde y hasta el caracter indicado.
console.log(busqueda11);

var busqueda12 = texto1.split("i"); //Devuelve un array con los elementos del string. De acuerdo al separador utilizado.
console.log(busqueda12);

var busqueda13 = texto1.trim() //Elimina los espacios al comienzo y al final del string.
console.log(busqueda13);

