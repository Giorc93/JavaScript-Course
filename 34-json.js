'use strict'

//JSON 

//JSON JavaScript Object Notation. Permite crear objetos de manera simple y sencilla. Son arrays asociativos dentro de JavaScript que permiten estructurar datos de manera simple y optima.

//Definición del objeto JSON y sus propiedades
window.addEventListener("load", () => {

var pelicula = {
	titulo: "Batman vs Superman",
	year: 2017,						//Propiedades establecidas y separadas por coma.
	pais: "EE.UU"

};

pelicula.titulo = "Superman Begins";  //Cambiar nombre o propiedad.

console.log(pelicula);

var peliculas = [
	{titulo: "Sonic", year: 2020, pais: "EE.UU"},
	{titulo: "Bad Boys", year: 2020, pais: "EE.UU"},		//Arreglo de objetos JSON
	{titulo: "Suicide Squad", year: 2019, pais: "EE.UU"},
	pelicula 												//Se puede añadir objetos JSON creados previamente|	
];

var peli_titulo = document.querySelector("#pelis");			

for(let peli in peliculas){
	
	var p = document.createElement("p"); //Crear elemento parrafo
	p.append(peliculas[peli].titulo +" - "+peliculas[peli].year+" - " +peliculas[peli].pais);  //Añadir el elemento .titulo del objeto JSON al parrafo
	peli_titulo.append(p); //Añadir al parrafo el elemento p
}
});