let week = parseFloat(prompt("Introduzca un número entero entre 1-7:"));

switch (week) {
  case 1:
    alert("lunes");
    break; // Finaliza toda la declaración de cambio
  case 2:
    alert("martes");
    break;
  case 3:
    alert("miércoles");
    break;
  case 4:
    alert("jueves");
    break;
  case 5:
    alert("viernes");
    break;
  case 6:
    alert("sábado");
    break;
  case 7:
    alert("domingo");
    break;
  default:
    alert("ilegal");
    break;
}
