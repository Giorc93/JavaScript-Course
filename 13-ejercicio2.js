'use strict'

//Ejercicio 2
//Utilizando un bucle mostrar la media y la suma de los numeros introducidos por el usuario hasta introducir un número
//negativo y ahí motrar el resultado.

var suma = 0;
var contador = 0;

do{				//El ciclo se ejecutara y posteriormente se comprobará la condición (DO WHILE)
	var numero = parseInt(prompt ("Ingrese numero la operación finalizará cuando introduzca un número negativo: ", 0));
	if(isNaN(numero)){
		alert("Número inválido");
		numero = 0;
	}else if(numero >=0){
		suma = suma + numero;
		contador++;
	}
	var 	media = suma/contador;
}while(numero >= 0)

alert("La suma es igual a: "+ suma+" La media es igual a: "+media);