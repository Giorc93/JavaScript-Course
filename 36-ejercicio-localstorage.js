'use strict'

window.addEventListener("load", () => {							//Cargar script

	var formulario = document.querySelector("#formpeliculas");  //Capturar elemento formulario

	formulario.addEventListener("submit", () => {				//Capturar acción submit

		var titulo = document.querySelector("#addpelicula").value;		//Seleccionar #addpelicula y capturar su valor .value

		if(titulo.length >= 1){						//Comprobar que el titulo es valido, que el campo no esté vacío
			localStorage.setItem(titulo, titulo);   //Si lo anterior se cumple, agregar el elemento al localStorage
		}

	});     //Cerrar captura elemento submit.

	//var ul = document.querySelector("#peliculas");  //Crear variable y seleccionar el elemento con el id #peliculas <div>

var ul = document.createElement("ul");			//Creal el <ul> desde el script
peliculas.append(ul);							//Añadir el <ul> al <div>			También es posible crear estos elementos en el HTML y utilizar la linea anterior

	for(var i in localStorage){					//Recorrer el localStorage
		if(typeof localStorage[i] == "string"){		//Comprobar que el elemento que se recorre en el localStorage es un string
			var li = document.createElement("li");	//Crear elemento <li>
			li.append(localStorage[i]);			//Añadir el elemento recorrido en el localStorage al elemento <li>
			ul.append(li);					//Añadir el elemento <li> al <div> peliclulas
		}
	}

	var formularioB = document.querySelector("#formBpeliculas");  //Capturar el formulario

	formularioB.addEventListener("submit", () => {  //Capturar evento submit

		var titulob = document.querySelector("#Speliculas").value;  //Capturar valor del input Speliculas

		if(titulob.length >= 1){  						//Comprobar valor valido del elemento
			localStorage.removeItem(titulob, titulob);	//Eliminar el elemento
		}


	});

});