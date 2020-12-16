var visible = false;

function menu() {
  if (visible == false) {
    visible = true
    document.querySelector(".menuBar").style.transform = "translate(0, 70px)";
    document.querySelector(".menuIcon").style.transform = "rotateZ(90deg)";
    document.querySelector(".menuBar").style.visibility = "visible";
  }
  else if (visible == true) {
    visible = false;
    document.querySelector(".menuBar").style.transform = "translate(0, 0px)";
    document.querySelector(".menuIcon").style.transform = "rotateZ(0deg)";
    document.querySelector(".menuBar").style.visibility = "hidden";
  }
}
