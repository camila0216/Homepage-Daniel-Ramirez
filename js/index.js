"use strict";
/* Función con el fin de mover la imagen principal del index solo cuando es en computador
   Cuando sea en un celular se pone la imagen sin movimiento  */
function moveImage() {
  let element = document.getElementById("photo");
  let respPhone = window.matchMedia("(max-width: 575.98px)");
  let pos = -50;
  let id = setInterval(frame, 10);
  function frame() {
    if (respPhone.matches) {
      element.style.width = "inherit";
      element.styke.height = "inherit";
    }
    else{
      if (pos == 24) {
        clearInterval(id);
      } else {
        pos++;
        element.style.marginLeft = pos + "vw";
      }
    }
  }
}

/* Función que pone la imagen de studies al pasar encima
   del boton studies del menu lateral */
function putImageStudies(){
  let element = document.getElementById("imagenDos");
  let respPhone = window.matchMedia("(max-width: 575.98px)");
  element.src = "images/logo.png";
  if (respPhone.matches) {
    element.style.width = 30 + "vw";
    element.style.height = 10 + "vh";
    element.style.marginLeft = -2 + "vw";
  }
  else
  {
    element.style.marginLeft = -3 + "vw";
  }
}

/* Función que pone la imagen de projects al pasar encima
   del boton projects del menu lateral */
function putImageProjects(){
  let element = document.getElementById("imagenDos");
  let respPhone = window.matchMedia("(max-width: 575.98px)");
  element.src = "images/NAMI.png";
  element.style.backgroundColor = "rgb(41, 41, 41);";
  if (respPhone.matches) {
    element.style.width = 30 + "vw";
    element.style.height = 10 + "vh";
    element.style.marginLeft = -2 + "vw";
  }
  else
  {
    element.style.marginLeft = -3 + "vw";
  }
}

/* Función que pone la imagen de hobbies al pasar encima
   del boton hobbies del menu lateral */
function putImageHobbies(){
  let element = document.getElementById("imagenDos");
  let respPhone = window.matchMedia("(max-width: 575.98px)");
  element.src = "images/control.png";
  element.style.backgroundColor = "rgb(41, 41, 41);";
  if (respPhone.matches) {
    element.style.width = 30 + "vw";
    element.style.height = 10 + "vh";
    element.style.marginLeft = -2 + "vw";
  }
  else
  {
    element.style.marginLeft = -3 + "vw";
  }
}