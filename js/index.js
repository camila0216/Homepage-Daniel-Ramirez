function moveImage() {
  let element = document.getElementById("photo");
  let respPhone = window.matchMedia("(max-width: 575.98px)");
  let pos = -50;
  let id = setInterval(frame, 10);
  function frame() {
    if (respPhone.matches) {

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

/* function backImageTwo(){
  let element = document.getElementById("imagenDos");
  element.src = undefined;
  element.alt = "Welcome you all";
  element.style.backgroundColor = "rgb(41, 41, 41);";
} */

/* function rotateContact(){

} */