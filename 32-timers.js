	'use strict'

	window.addEventListener("load", () => {

		function intervalo(){

		var tiempo = setInterval(() => {  //.setInterval ejecuta la función callback cada x milisegundos, establecidos en el segundo parametro de la funcion.
			var tamaño = document.querySelector("#encabezado");
			var tam_font = tamaño.style.fontSize;

			if(tam_font == "20px"){
				tamaño.style.fontSize = "10px";
			}else{
				tamaño.style.fontSize = "20px";
			}
		}, 1500);

		return tiempo;

		}

	var tiempo = intervalo(); //Establece la variable tiempo como la función intervalo
		//Timers
		

		/*
		var tiempo = setTimeOut(() => {  //.setTimeOut ejecuta la función callback una sola vez luego de transcurrido el intervalo, establecidos en el segundo parametro de la funcion.
			var tamaño = document.querySelector("#encabezado");
			var tam_font = tamaño.style.fontSize;

			if(tam_font == "90px"){
				tamaño.style.fontSize = "10px";
			}else{
				tamaño.style.fontSize = "90px";
			}
		}, 1000);*/
		
		var stop = document.querySelector("#stop");

		stop.addEventListener("click", () => {
			alert("Has detenido el intervalo.");
			clearInterval(tiempo);  //	Detendrá el tiempo del timer
		});

		var start = document.querySelector("#start");

		start.addEventListener("click", () => {
			alert("Has iniciado el intervalo.");
			intervalo(); //iniciará la función nuevamente
		});		
	});