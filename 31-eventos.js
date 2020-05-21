'use strict'

//Eventos
//Función que se ejecuta cuando sucede algo.

//Eventos de raton

window.addEventListener("load", () => {  //De esta manera con la funcion "load" se puede colocar el script en el <head> del HTML y se ejecutará sin ningún problema una vez los elementos del DOM se hayan cargado.
	var boton = document.querySelector("#boton");
	console.log(boton);


	function google(){
		window.open("https://google.com.co");

	}
	function cambiaColor(){

		var bg = boton.style.background;

		if(bg == "green"){
			boton.style.background = "red";
		}else{
			boton.style.background = "green";
		}
		
	}

	/*
	Evento onclick: Se ejecuta al hacer click en el elemento.
	Evento ondblclick se puede utilizar también con el dobleclick
	.addEventListener para hacer el llamado de eventos en el script en lugar de realizarlos en el HTML y generar un codigo más limpio
	*/

	//Evento click // This

	boton.addEventListener("click", function(){
		cambiaColor();
		console.log(this);									//.addEventListener con función flecha.
		this.style.border = "10px solid black";
	}); 										

	//Evento Mouse Over

	boton.addEventListener("mouseover", function (){ //Se ejecuta cuando se posa el puntero sobre el elemento.
		boton.style.background = "white";
	})

	//Evento Mouse Out

	boton.addEventListener("mouseout", function(){  //Se ejecuta cuando se aleja el puntero del elemento.
		boton.style.background = "white";
	})

	var input = document.querySelector("#campo_nombre");
	//Evento Focus

	input.addEventListener("focus", function(){  //Se ejecuta al ingresar, hacer click o hacer foco en el campo.
		console.log("Focus");
	})

	//Evento Blur

	input.addEventListener("blur", function(){ //Se ejecuta al salir del campo
		console.log("Blur");
	})

	//Evento Keydown

	input.addEventListener("keydown", function(key){  //Se ejecuta al estar pulsando una tecla, String.fromCharCode: Convierte a String el elemento, .keyCode recupera la información del teclado
		console.log("Keydown", String.fromCharCode(key.keyCode));
	})

	//Evento Keypress

	input.addEventListener("keypress", function(key){  //Se ejecuta al haber pulsado una tecla
		console.log("Keypress", String.fromCharCode(key.keyCode));
	})

	//Evento Keyup

	input.addEventListener("keyup", function(key){
		console.log("Keyup", String.fromCharCode(key.keyCode));  //Se ejecuta al dejar de pulsar la tecla
	})

	//Evento load: Carga el script luego de que todos los elementos del DOM ya se han cargado.
})