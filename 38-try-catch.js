'use strict'

//Capturar Errores en el código

window.addEventListener("load", () => {

try{					//Se ingresa en el try {} todo el código que sea susceptible a errores
	var year = 2020;

	alert(yea);

}catch(error){			//En catch se atrapa el error y posteriormente se puede mostrar en consola, o como alert o ejecutar cualquier bloque con él
	console.log(error);
	alert("Ha ocurrido un error: "+error);
}


})