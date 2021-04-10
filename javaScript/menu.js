let visible = false;

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

let scrollY = 0;

document.addEventListener('scroll', function(e) {

  if (scrollY < window.scrollY) {
    closeHeadBar();
  }

  scrollY = window.scrollY;

  if (scrollY < 200) {
    openHeadBar();
  }
});

function closeHeadBar() {
  if (scrollY != 0) {
    document.querySelector(".HeadBar").style.transform = "translateY(-70px)";
    document.querySelector(".HeadBar").style.transition = "1s";
  }
}

function openHeadBar() {
  document.querySelector(".HeadBar").style.transform = "translateY(0px)";
  document.querySelector(".HeadBar").style.transition = "0.4s";
}
