let week = parseFloat(prompt("Introduzca un número entero entre 1-7:")); //parseFloat transforma la respuesta del usuario de tipo string a numero para que pueda ejecutarse el codigo a continuacion

switch (week) {
  case 1:
    alert("lunes");
    break;
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
    alert("Los numeros aceptados son del 1 al 7 unicamente");
    break;
}
