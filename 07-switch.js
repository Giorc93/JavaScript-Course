'strict use'

//Condicional Swtich

var edad = 41;
var imprime = "";
switch(edad){					//Operador swtitch 
	case 18: 					//Caso 1 de la variable edad
		imprime = "Acabas de cumplir la mayoria de edad";
	break;						//break finaliza el caso 1
	case 25: 					//Caso 2...
		imprime = "Ya eres un adulto";
	break;
	case 40:
		imprime = "Crisis de los 40";
	break;
	case 70:
		imprime = "Eres un anciano";
	break;
	default: 					//Caso por default
		imprime = "Edad no registrada";
	break;
}
console.log(imprime);

