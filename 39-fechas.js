'use strict'

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
var textoHora = `
	El año es: ${year}
	El mes es: ${month}
	El día es: ${day}
	La hora es: ${hour}
	`
console.log(textoHora);
console.log(parseInt(Math.random()*1000));