//SIMULADOR INTERACTIVO DE CONVERSOR DE UNIDADES
let dolarEstadounidense= 0.0065;
let pesoChileno= 6.32;
let pesoUruguayo= 31.52;
let pesoColombiano= 0.27;
let euros= 0.0066;
let libraEsterlina= 0.0058;
let realBrasileño= 0.034;
let dolarAustraliano= 0.010;
let pesoDominicano=0.35;
let pesoMexicano=0.13;
let francoSuizo= 0.0065;
let dolarCanadiense=0.0089;
let Yen= 0.96;
let rubloRuso=0.40;
let liraTurca=0.12;

do {
    let pesoArgentino=parseInt(prompt("Ingrese la cantidad de pesos argentinos que quiere convertir"));
alert("Monedas a las que se pueden convertir:\n Dolar Estadounidense (1)\n Pesos Chilenos (2)\n Pesos Colombianos (3)\n Euros (4)\n Pesos Uruguayos (5)\n Libra Esterlina (6)\n Real Brasileño (7)\n Dolar Australiano (8)\n Pesos Dominicanos (9)\n Pesos Mexicanos (10)\n Franco Suizo (11)\n Dolar Canadiense (12)\n Yen Japones (13)\n Rublo Ruso (14)\n Lira Turca (15)\n");
let opcion=prompt("¿A que moneda desea convertir sus pesos argentinos?");
if (opcion=="1") {
    let pesoADolar=(pesoArgentino*dolarEstadounidense);
    alert("Su conversión de $" +pesoArgentino + " pesos argentinos a dólares seria de: " + pesoADolar + " dólares");
} if (opcion=="2") {
    let pesoAChileno=(pesoArgentino*pesoChileno);
alert("Su conversión de $" + pesoArgentino + " pesos argentinos a pesos chilenos seria de: " + pesoAChileno + " pesos chilenos");
} if (opcion=="3") {
    let pesoAColombiano=(pesoArgentino*pesoColombiano);
    alert("Su conversión de $" + pesoArgentino + " pesos argentinos a pesos colombianos seria de: " + pesoAColombiano + " pesos colombianos");
} if (opcion=="4") {
let pesoAEuro=(pesoArgentino*euros);
alert("Su conversión de $" + pesoArgentino + " pesos argentinos a euros seria de: " + pesoAEuro + " Euros");
} if (opcion=="5") {
let pesoAUruguayo=(pesoArgentino*pesoUruguayo);
alert("Su conversión de $" + pesoArgentino + " pesos argentinos a pesos uruguayos seria de: " + pesoAUruguayo + " pesos uruguayos");
} if (opcion=="6") {
    let pesoALibra=(pesoArgentino*libraEsterlina);
    alert("Su conversión de $" + pesoArgentino + " pesos argentinos a libras esterlinas seria de: " + pesoALibra + " libras esterlinas");
} if (opcion=="7") {
    let pesoABrasileño=(pesoArgentino*realBrasileño);
    alert("Su conversión de $" + pesoArgentino + " pesos argentinos a reales brasileños seria de: " + pesoABrasileño + " reales brasileños");
} if (opcion=="8") {
let pesoAAustraliano=(pesoArgentino*dolarAustraliano);
alert("Su conversión de $" + pesoArgentino + " pesos argentinos a dolares australianos seria de: " + pesoAAustraliano + " dolares australianos");
} if (opcion=="9") {
    let pesoADominicano=(pesoArgentino*pesoDominicano);
    alert("Su conversión de $" + pesoArgentino + " pesos argentinos a pesos dominicanos seria de: " + pesoADominicano + " pesos dominicanos");
} if (opcion=="10") {
let pesoAMexicano=(pesoArgentino*pesoMexicano);
alert("Su conversión de $" + pesoArgentino + " pesos argentinos a pesos mexicanos seria de: " + pesoAMexicano + " pesos mexicanos");
} if (opcion=="11") {
    let pesoAFrancoSuizo=(pesoArgentino*francoSuizo);
    alert("Su conversión de $" + pesoArgentino + " pesos argentinos a francos suizos seria de: " + pesoAFrancoSuizo + " francos suizos");
} if (opcion=="12") {
    let pesoADolarCanadiense=(pesoArgentino*dolarCanadiense);
    alert("Su conversión de $" + pesoArgentino + " pesos argentinos a dolares canadienses seria de: " + pesoADolarCanadiense + " dolares canadienses");
} if (opcion=="13") {
    let pesoAYen=(pesoArgentino*Yen);
    alert("Su conversión de $" + pesoArgentino + " pesos argentinos a yen japones seria de: " + pesoAYen + " yen japones");
} if (opcion=="14") {
let pesoARubloRuso=(pesoArgentino*rubloRuso);
alert("Su conversión de $" + pesoArgentino + " pesos argentinos a rublos rusos seria de: " + pesoARubloRuso + " rublos rusos");
} if (opcion=="15") {
let pesoALiraturca=(pesoArgentino*liraTurca);
alert("Su conversión de $" + pesoArgentino + " pesos argentinos a liras turcas seria de: " + pesoALiraturca + " liras turcas");
}

respuesta = prompt("¿Desea volver a convertir una moneda? (S/N)");
} while (respuesta=="S" || respuesta=="s");
