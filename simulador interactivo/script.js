let temperatura;
let operacion;
do {
  operacion = prompt(
    "Bienvenido al conversor de temperaturas. 1- Ingrese una operacion (F, C) 2- Ingrese el valor de temperatura a convertir."
  );
  temperatura = parseFloat(prompt("Ingrese el valor de temperatura")); //

  if (isNaN(temperatura)) {
    alert("Por favor, solo debe ingresar numeros.");
  }
} while (isNaN(temperatura));

switch (operacion) {
  case "C":
    console.log("Equivale a " + temperatura * 1.8 + 32 + " Grados Farenheit"); // celcius a farenheit
    break;
  case "F":
    console.log("Equivale a " + (temperatura - 32) / 1.8 + " Grados Celcius"); // farenheit a celcius
    break;
  default:
    alert("Operacion no valida, debe ingresar F o C");
    break;
}
