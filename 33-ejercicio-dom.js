'use strict'

window.addEventListener("load", () => {

	var formulario = document.querySelector("#form");  //Capturar el formulario
	var box_dashed = document.querySelector(".dashed"); //Captura el elemento estilizado 
	box_dashed.style.display = "none";  //Oculta el elemento

	formulario.addEventListener("submit", () => {  //Capturar el evento submit del formulario
		console.log("Evento submit capturado.")

	var nombre = document.querySelector("#nombre").value; // .value Extrae el valor dentro del campo.
	console.log(nombre);
	var apellidos = document.querySelector("#apellidos").value;
	console.log(apellidos);
	var edad = document.querySelector("#edad").value;
	console.log(edad);

	//Validación del Formulario

	if(nombre.trim() == null || nombre.trim().length == 0){		//Valida si el campo está vacío 
		alert("El nombre ingresado no es válido.");
		document.querySelector("#error_nombre").innerHTML = "El nombre ingresado no es válido."  //Muestra mensaje de error bajo el campo de ingreso
		return false;		// Retorna falso al ser inválido
	}else{
		document.querySelector("#error_nombre").style.display = "none"; //Oculta el mensaje de error luego de validar el ingreso
	}
	if(apellidos.trim() == null || apellidos.trim().length == 0){
		alert("Los apellidos ingresados no son válidos.");
		document.querySelector("#error_apellidos").innerHTML = "Los apellidos ingresados no son válidos."
		return false;
	}else{
		document.querySelector("#error_apellidos").style.display = "none";
	}
	if(isNaN(edad) == true || edad <= 0 || edad == null){
		alert("La edad ingresada no es válida.");
		document.querySelector("#error_edad").innerHTML = "La edad ingresada no es válida.";
		return false;
	}else{
		document.querySelector("#error_edad").style.display = "none";
	}

	box_dashed.style.display = "block"; //Imprime el elemento. Ver propiedades de .display

	var p_nombre = document.querySelector("#p_nombre span");
	var p_apellidos = document.querySelector("#p_apellidos span");  //Selecciona el <span> del elemento seleccionado mediante querySelector
	var p_edad = document.querySelector("#p_edad span");

	p_nombre.innerHTML = nombre; //Imprime la variable nombre en el elemento p_nombre
	p_apellidos.innerHTML = apellidos;
	p_edad.innerHTML = edad;

	//Opción mediante for in y .append
/*
	var datos_u = [nombre, apellidos, edad];

	for ( let dato in datos_u){

		var parrafo = document.createElement("p"); //Crea el elemento parrafo
		parrafo.append(datos_u[dato]); // Añade cada dato del arreglo de los datos del usuario al parrafo
		box_dashed.append(parrafo);  // Añade el parrafo al elemento box_dashed
	}
*/
	})

})
