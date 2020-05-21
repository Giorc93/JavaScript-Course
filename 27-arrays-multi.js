'use strict'

//Arrays Multidimensionales

//Arrays dentro de otros

var categorias = ["Acción", "Terror", "Comedias", "Drama"];
var peliculas = ["8 Mile", "Batman", "Joker", "Raging Bull", "Avengers", "Zombieland"];

//Ordenar arrays .sort(); por orden alfanumérico

peliculas.sort();

//Dar orden inverso al array .

peliculas.reverse();


console.log(peliculas);


var cine = [categorias, peliculas];

//console.log(cine[0][3]);
//console.log(cine[1][2]);

//Añadir elementos al array .push()

/*
var nueva_peli = ("");

do{
	var nueva_peli = prompt("Ingrese película a añadir: ");
	peliculas.push(nueva_peli);
}while(nueva_peli != "ACABAR");

peliculas.pop(); //Elimina el último elemento del array
*/
//Eliminar elemento especifico del array.

var indice = peliculas.indexOf("Batman");
console.log(indice);
if(indice > -1){
	peliculas.splice(indice, 1); //Elimina los elementos desde el indice indicado hasta la cantidad de elementos indicados (indice, elementos a eliminar);
}

console.log(peliculas);

//Convertir array en string

var peliculas_string = peliculas.join();		//.join convierte el array en string
console.log(peliculas_string);

//Convertir string en array

var peliculas_array = peliculas_string.split(",");		//.split convierte el string en array separándolos por el elemento ingresado
console.log(peliculas_array);

