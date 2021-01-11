var im01 = document.getElementById("fa01");
var im02 = document.getElementById("fa02");
var maxImg = 1;
var curImg = 0;

function nextImageL() {

  if (curImg == maxImg) {
    curImg = 0;
  } else {
    curImg = 1;
  }
  if (curImg == 0) {
    im02.style.visibility = "hidden";
    im02.style.position = "absolute";
    im01.style.visibility = "visible";
    im01.style.position = "static";
  }
  if (curImg == 1) {
    im01.style.visibility = "hidden";
    im01.style.position = "absolute";
    im02.style.visibility = "visible";
    im02.style.position = "static";
    console.log("yes02");
  }
}

function nextImageR() {

  if (curImg == 0) {
    curImg = maxImg;
  } else {
    curImg = curImg - 1;
  }
  if (curImg == 0) {
    im02.style.visibility = "hidden";
    im02.style.position = "absolute";
    im01.style.visibility = "visible";
    im01.style.position = "static";
  }
  if (curImg == 1) {
    im01.style.visibility = "hidden";
    im01.style.position = "absolute";
    im02.style.visibility = "visible";
    im02.style.position = "static";
    console.log("yes02");
  }
}

nextImageL();
