'use strict'

//Parametros REST y SPREAD

function listadoFrutas(fruta1,fruta2,...resto_de_frutas){ //...X parametro que reúne el resto de valores en un array "Parámetro tipo rest"
	console.log("Fruta 1: "+fruta1);
	console.log("Fruta 2: "+fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Manzana","Pera","Sandia","Coco","Melon","Naranja");

var frutas = ["Manzana","Pera"]
listadoFrutas(...frutas,"Sandia","Coco","Melon","Naranja")//...X dispersa los valores del array en parámetros individuales