'use strict'

window.addEventListener("load", () => {

//Local Storage
//Se utiliza mucho en apps desarrolladas con JavaScript. Memoria en el naavegador.

//Chequear si el navegador es compatible

if(typeof(Storage) != undefined){
	console.log("localStorage disponible");
}else{
	console.log("localStorage no está disponible");

}

//Guardar datos en el Localstorage

localStorage.setItem("titulo", "Curso de JavaScript");

//Recuperar elemento

console.log (localStorage.getItem("titulo"));  //Se recupera el elemento a través de su key.

var p = document.querySelector("#pelis");
p.append(localStorage.getItem("titulo"));

//Guardar objetos
//Se deben convertir los objetos en string. En este caso se convierte el objeto JSON a un JSON string.
var gio = {
	nombre: "Geovanny Andres",
	email: "giorc93@hotmail.com",
	edad: 26
}

localStorage.setItem("gio", JSON.stringify(gio));		//Se guarda el elemento JSON convertido a string mediante JSON.stringify()

//Recuperar objeto

var userjs = JSON.parse(localStorage.getItem("gio"));// JSON.parse() convierte el JSON string a un objeto de JavaScript
document.querySelector("#datos").append(userjs.nombre+" - "+userjs.email+" - "+userjs.edad);

//Borrar elementos del localStorage

localStorage.removeItem("gio");
localStorage.clear();
});