var transTT = 101;
var transTW = 101;
var ttEnd = true;
var twEnd = true;

document.querySelector(".SocialsTT").addEventListener("transitionend", function(event) {
  ttEnd = true;
  twEnd = true;
  document.querySelector(".SocialsTW").style.transition = "0s";
  document.querySelector(".SocialsTT").style.transition = "0s";
});
document.querySelector(".SocialsTW").addEventListener("transitionend", function(event) {
  twEnd = true;
  ttEnd = true;
  document.querySelector(".SocialsTW").style.transition = "0s";
  document.querySelector(".SocialsTT").style.transition = "0s";
});

function clickScrollRight() {
  if (ttEnd == true && transTT == 101 && transTW == 101 && twEnd == true) {
    transTT = 0;
    ttEnd = false;
    document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
    document.getElementById("socialScrollArrowRight").style.filter = "opacity(70%)";
    document.querySelector(".SocialsTT").style.transition = "0.5s";
    document.querySelector(".SocialsTT").style.transform = "translate(" + transTT +"vw, -100vh)";
  } else if (ttEnd == true && transTW == 101 && transTT == 0 && twEnd == true) {
    transTW = 0;
    twEnd = false;
    document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
    document.getElementById("socialScrollArrowRight").style.filter = "opacity(30%)";
    document.querySelector(".SocialsTW").style.transition = "0.5s";
    document.querySelector(".SocialsTW").style.transform = "translate(" + transTW +"vw, -200vh)";
  }
}

function clickScrollLeft() {
  if (ttEnd == true && transTT == 0 && transTW == 101 && twEnd == true) {
    transTT = 101;
    ttEnd = false;
    document.getElementById("socialScrollArrowLeft").style.filter = "opacity(30%)";
    document.getElementById("socialScrollArrowRight").style.filter = "opacity(70%)";
    document.querySelector(".SocialsTT").style.transition = "0.5s";
    document.querySelector(".SocialsTT").style.transform = "translate(" + transTT +"vw, -100vh)";
  } else if (ttEnd == true && transTW == 0 && transTT == 0 && twEnd == true) {
    transTW = 101;
    twEnd = false;
    document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
    document.getElementById("socialScrollArrowRight").style.filter = "opacity(70%)";
    document.querySelector(".SocialsTW").style.transition = "0.5s";
    document.querySelector(".SocialsTW").style.transform = "translate(" + transTW +"vw, -200vh)";
  }
}
