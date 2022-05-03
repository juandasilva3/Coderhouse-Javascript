const COMIDA = [];

function menu(
  entrada,
  entradaValor,
  principal,
  pricipalValor,
  postre,
  postreValor,
  bebida,
  bebidaValor
) {
  let total = entradaValor + pricipalValor + postreValor + bebidaValor,
    propina = total * 0.1;
  return (
    "Factura: \nLa entrada: " +
    entrada +
    " $" +
    entradaValor +
    "\nEl plato principal: " +
    principal +
    " $" +
    pricipalValor +
    "\nEl postre: " +
    postre +
    " $" +
    postreValor +
    "\nLa Bebida: " +
    bebida +
    " $" +
    bebidaValor +
    "\nTotal: $" +
    total +
    "\nPropina: $" +
    propina +
    "\nGracias por preferirnos."
  );
}

let entrada,
  entradaValor,
  principal,
  principalValor,
  postre,
  postreValor,
  bebida,
  bebidaValor;

entr = prompt(
  "Bienvenido. \nSeleccione una entrada: \npicada \nbrochetas \nchori o nada"
).toLowerCase();

while (
  entr != "picada" &&
  entr != "brochetas" &&
  entr != "chori" &&
  entr != "nada"
) {
  alert("invalido");
  entr = prompt(
    "Elija una entrada, \npicada, \nbrochetas, \nchori"
  ).toLowerCase();
}
switch (entr) {
  case "picada":
    entrada = "picada";
    entradaValor = 250;
    break;
  case "chori":
    entrada = "chori";
    entradaValor = 100;
    break;
  case "brochetas":
    entrada = "brochetas";
    entradaValor = 125;
    break;
  default:
    entrada = "nada";
    entradaValor = 0;
    break;
}
COMIDA.push({ comida: entrada, precio: entradaValor });

principal = prompt(
  "Elija un plato principal: \nasado \npescado \npollo \no nada"
).toLowerCase();
while (
  principal != "asado" &&
  principal != "pescado" &&
  principal != "pollo" &&
  principal != "nada"
) {
  alert("invalido");
  principal = prompt(
    "Elija un plato principal: \nasado \npescado \npollo o \nnada"
  ).toLowerCase();
}
switch (principal) {
  case "asado":
    principal = "asado";
    principalValor = 550;
    break;
  case "pescado":
    principal = "pescado";
    principalValor = 900;
    break;
  case "pollo":
    principal = "pollo";
    principalValor = 450;
    break;
  default:
    principal = "nada";
    principalValor = 0;
    break;
}
COMIDA.push({ comida: principal, precio: principalValor });
postre = prompt(
  "Elija un postre: \nhelado \nflan \nisla floante \nnada"
).toLowerCase();
while (
  postre != "helado" &&
  postre != "flan" &&
  postre != "isla floante" &&
  postre != "nada"
) {
  alert("invalido");
  postre = prompt(
    "Elija un postre: \nhelado \nflan \nisla floante \nnada"
  ).toLowerCase();
}
switch (postre) {
  case "helado":
    postre = "helado";
    postreValor = 150;
    break;
  case "flan":
    postre = "flan";
    postreValor = 230;
    break;
  case "isla floante":
    postre = "isla floante";
    postreValor = 175;
    break;
  default:
    postre = "nada";
    postreValor = 0;
    break;
}
COMIDA.push({ comida: postre, precio: postreValor });
bebida = prompt(
  "Elija una bebida: \nagua \nrefresco \ncerveza \nvino \nnada"
).toLowerCase();
while (
  bebida != "agua" &&
  bebida != "refresco" &&
  bebida != "cerveza" &&
  bebida != "vino" &&
  bebida != "nada"
) {
  alert("invalido");
  bebida = prompt(
    "Elija una bebida: \nagua \nrefresco \ncerveza \nvino \nnada"
  ).toLowerCase();
}
switch (bebida) {
  case "agua":
    bebida = "agua";
    bebidaValor = 50;
    break;
  case "refresco":
    bebida = "refresco";
    bebidaValor = 100;
    break;
  case "cerveza":
    bebida = "cerveza";
    bebidaValor = 180;
    break;
  case "vino":
    bebida = "vino";
    bebidaValor = 500;
    break;
  default:
    bebida = "nada";
    bebidaValor = 0;
    break;
}
COMIDA.push({ comida: bebida, precio: bebidaValor });
alert(
  menu(
    COMIDA[0].comida,
    COMIDA[0].precio,
    COMIDA[1].comida,
    COMIDA[1].precio,
    COMIDA[2].comida,
    COMIDA[2].precio,
    COMIDA[3].comida,
    COMIDA[3].precio
  )
);
