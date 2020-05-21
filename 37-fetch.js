'use strict';

//Fetch(Ajax) y Peticiones a Servicios/APIs rest

window.addEventListener("load", () => {

	var usuarios = [];
	var list = document.querySelector("#usuarios");
	var listU = document.querySelector("#usuario");
	var gioD = document.querySelector("#gio");

	getUsuarios()	//Al cargar la pagina se hace una petición AJAX utilizando fetch a la URL de usuarios para listarlos. PROMESA
		.then(data => data.json())		//Capturar los datos data.json() mediante la función callback llamada en este caso data
		.then(users => {					
			usuarios = users.data;			//Se guardan los datos capturados mediante ."data" que es el elemento del objeto JSON que deseo conservar, en la variable usuarios a través de la función callback llamada en este caso users 
			listaUsuarios(usuarios);		//Se envian los datos a la función listaUsuarios para procesarlos

			return getInfo();				//Se llama al siguiente metodo, que también es una promesa

			/* Método for in
			for(var u in usuarios){
				var p = document.createElement("p");
				p.append("ID: "+usuarios[u].id+" - E-Mail: "+usuarios[u].email+" - Nombre: "+usuarios[u].first_name+" - Apellido: "+usuarios[u].last_name+" - Avatar: "+usuarios[u].avatar);
				list.append(p);
			}
				Método .forEach
			usuarios.forEach(u => {
				var p = document.createElement("p");
				p.append("ID: "+u.id+" - E-Mail: "+u.email+" - Nombre: "+u.first_name+" - Apellido: "+u.last_name+" - Avatar: "+u.avatar);
				list.append(p);
			})
			*/
		})							//Se encadena el segundo fetch y se realizan las promesas para la obtención del usuario sólo
		.then(data => {
			var gioJSON = JSON.parse(data);		//Se convierte el string nuevamente a objeto JSON
			gioD.innerHTML = gioJSON.nombre;	//Se agrega el elemento nombre del objeto JSON al div gioD
			return getUser();
		})
		.then(data => data.json())	//Se atrapa los datos en un elemento JSON
		.then(user2 => {			//Se llevan los datos a una función callback, flecha
			listaUser(user2.data);	//Se utilizan los datos en la función, en éste caso se utilizan los capturados con .data del elemento JSON. Revisar los elementos del objeto JSON en la consola.
		})
		.catch(error => {			//.catch Captura error en las promesas
			alert("Error en las peticiones Fetch");		//Ejecuta el bloque después de atrapar el error
		});

	function listaUsuarios(usuarios){
		usuarios.map((user, i) => {			//.map recorre el array. Establece los parámetros user, i 
		let nombre = document.createElement("h3");		//Crea el elemento <h3>
		let avatar = document.createElement("img");		//Crea el elemento <img>
		nombre.innerHTML = i+". "+user.first_name+" "+user.last_name;	//Agrega los elementos recorridos en cada iteración al <h3>
		avatar.src = user.avatar;				//Carga la imagen desde el .src especificado en user.avatar
		avatar.width = "250";					//Modificación de valores del elemento <img>
		list.append(nombre);					//Añade los elementos <h3>Nombre a la lista
		list.append(avatar);					//Añade el elemento <img>Avatar a la lista
		var carga = document.querySelector(".loading");		//Elemento span aparece mientras se recibe respuesta del fetch. Cargando... ver HTML
		carga.style.display = "none";						//Se oculta el elemento una vez se han cargado los datos 
		})

	}

	function listaUser(user2){
		let nombreU = document.createElement("h4");
		nombreU.innerHTML = user2.first_name+" "+user2.last_name;
		listU.append(nombreU);
		var cargaU = document.querySelector(".uloading");
		cargaU.style.display = "none";
	}

	function getUsuarios(){
		return fetch("https://reqres.in/api/users")
	}
	function getUser(){
		return fetch("https://reqres.in/api/users/2")
	}

	function getInfo(){	
		var gio = {
			nombre: "Geovanny Andres",
			apellido: "Ramirez",
			edad: "26"
		};

		return new Promise ((resolve, reject) => {		//Creación de promesa con los parámetros que debe tener "resolve" y "reject"
			var gio_string = "";

			setTimeout(function(){						//Se establece función setTimeout para esperar a que se ejecute el codigo
				gio_string = JSON.stringify(gio);		//Se convierte el objeto JSON gio en un string
				if(typeof gio_string != "string" || gio_string == "") return reject("error 2");	//Se comprueba que el string no está vacío u nulo y se devuelve el error mediante reject, cuando no se cumple la promesa
				return resolve(gio_string);				//Se devuelven los datos gio_string mediante resolve en caso de que la promesa se cumpla

			}, 3000);
		})

	}

});