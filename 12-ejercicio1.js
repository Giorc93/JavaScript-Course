'use strict'

//Ejercicio 1 
//Pedir dos numeros, decir mayor, menor y si son iguales

var numero1 = parseInt(prompt("Ingrese el primer número: ", 0));	//parseInt convierte el númer ingresado en el prompt a un entero
while(numero1 <= 0 || isNaN(numero1)){			//isNaN() Comprueba si el dato no es un número y retorna true o false
	var numero1 = parseInt(prompt("Ingrese nuevamente el primer número: ", 0));
	}
var numero2 = parseInt(prompt("Ingrese el segundo número: ", 0));
while(numero2 <= 0 || isNaN(numero2)){
	var numero2 = parseInt(prompt("Ingrese nuevamente el segundo número: ", 0));
	}
if(numero1 > numero2){
	console.log("El primer número es mayor que el segundo número. "+numero1+">"+numero2);		//Imprime el resultado concatenado en la consola
	}else if(numero1 == numero2){
	console.log("Los números son iguales. "+numero1+"="+numero2);
}else{
	console.log("El primer número es menor que el segundo número. "+numero1+"<"+numero2);
}
