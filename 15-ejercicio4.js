'use strict'

//Ejercicio 4
//Mostrar todos los números impares que hay entre dos números introducidos por el usuario

var numero1 = parseInt(prompt("Ingrese el primer número: ", 0));	//Ingresa por prompt 
while(numero1 <= 0 || isNaN(numero1)){		//Comprobación de validez
	numero1 = parseInt(prompt("Ingrese nuevamente el primer número: ", 0));
}
var numero2 = parseInt(prompt("Ingrese el segundo número: ", 0));
while(numero2 <= 0 || isNaN(numero2)){
	numero2 = parseInt(prompt("Ingrese nuevamente el segundo número: ", 0));
}

if(numero1 < numero2){
	document.write("<h1>Del número "+numero1+" al número "+numero2+" están los siguientes números impares: <br/> </h1>")
	while(numero1 <= numero2){

		if(numero1%2 != 0){
			document.write(numero1+"<br/>");
		}else{
			console.log(numero1);
		}

		numero1++;
	}
}else if(numero1 == numero2){
	document.write("<h2>Los números ingresados son iguales.<br/></h2>");
}else{
	document.write("<h1>Del número "+numero2+" al número "+numero1+" están los siguientes números: <br/> </h1>")
	while(numero2 <= numero1){

		if(numero2%2 != 0){
			document.write(numero2+"<br/>");
		}else{
			console.log(numero2);
		}

		numero2++;
	}
}