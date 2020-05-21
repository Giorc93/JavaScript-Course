'use strict'

//BOM Browser Object Model

function getBom(){

console.log(screen.width);
console.log(screen.height);
console.log(window.location);

}

function redirect(url){
	window.location.href = url;
}

function newTab(url){
	window.open(url,"","height=360,width=480");
}

getBom();
