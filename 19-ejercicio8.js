'use strict'

//Ejercicio 8
//Realizar una calculadora, que pida 2 números por pantalla. Si se ingresa un número mal, se volverá a pedir
//Mostrar en el body, en una alerta, el resultado de sumar, restar, multiplicar y dividir

var numero1 = parseInt(prompt("Ingrese el primer número: ", 0));
while(isNaN(numero1)){
	numero1 = parseInt(prompt("Ingrese nuevamente el primer número: ", 0));
}
var numero2 = parseInt(prompt("Ingrese el segundo número: ", 0));
while(isNaN(numero2)){
	numero2 = parseInt(prompt("Ingrese nuevamente el segundo número: ", 0));
}
document.write("<h2>RESULTADOS CALCULADORA</h2><br/>");
//SUMA
var suma = numero1 + numero2;
alert("El resultado de la suma es: "+numero1+" + "+numero2+" = "+suma);
document.write("El resultado de la suma es: "+numero1+" + "+numero2+" = "+suma+"<br/>");
console.log("El resultado de la suma es: "+numero1+" + "+numero2+" = "+suma);
//RESTA
var resta = numero1 - numero2;
alert("El resultado de la resta es: "+numero1+" - "+numero2+" = "+resta);
document.write("El resultado de la resta es: "+numero1+" - "+numero2+" = "+resta+"<br/>");
console.log("El resultado de la resta es: "+numero1+" - "+numero2+" = "+resta);
//Multiplicación
var producto = numero1 * numero2;
alert("El resultado de la multiplicación es: "+numero1+" x "+numero2+" = "+producto);
document.write("El resultado de la multiplicación es: "+numero1+" x "+numero2+" = "+producto+"<br/>");
console.log("El resultado de la multiplicación es: "+numero1+" x "+numero2+" = "+producto);
//División
if(numero1 == 0){
	var division = 0;
	alert("El resultado de la divisón es: "+numero1+" / "+numero2+" = "+division);
	document.write("El resultado de la divisón es: "+numero1+" / "+numero2+" = "+division+"<br/>");
	console.log("El resultado de la divisón es: "+numero1+" / "+numero2+" = "+division);
}else if(numero2 == 0){
	alert("No es posible dividir entre 0");
	document.write("No es posible dividir entre 0");
	console.log("No es posible dividir entre 0");
}else{
	var division = numero1 / numero2;
	alert("El resultado de la divisón es: "+numero1+" / "+numero2+" = "+division);
	document.write("El resultado de la divisón es: "+numero1+" / "+numero2+" = "+division+"<br/>");
	console.log("El resultado de la divisón es: "+numero1+" / "+numero2+" = "+division);
}
