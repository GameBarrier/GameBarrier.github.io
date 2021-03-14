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

window.addEventListener('resize', function(event) {
  if (transTT < 101) {
    window.scrollTo(0,document.body.scrollHeight);
  }
});

window.addEventListener('wheel', function(event) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    if (event.deltaY < 0) {

      if (transTW < 101) {
        if (twEnd == true) {
          transTW = transTW + 101;
          ttEnd = false;
          twEnd = false;
          console.log(twEnd);
          document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
          document.getElementById("socialScrollArrowRight").style.filter = "opacity(70%)";
          document.querySelector(".SocialsTW").style.transition = "0.5s";
          document.querySelector(".SocialsTW").style.transform = "translate(" + transTW +"vw, -200vh)";
        }
      } else if (transTT < 101) {
        if (ttEnd == true) {
          transTT = transTT + 101;
          ttEnd = false;
          twEnd = false;
          console.log(ttEnd);
          document.getElementById("socialScrollArrowLeft").style.filter = "opacity(30%)";
          document.getElementById("socialScrollArrowRight").style.filter = "opacity(70%)";
          document.querySelector(".SocialsTT").style.transition = "0.5s";
          document.querySelector(".SocialsTT").style.transform = "translate(" + transTT +"vw, -100vh)";
        }
      } else {
        if (ttEnd == true) {
          document.querySelector(".body").style.overflowY = "scroll";
        }
      }
    }

    else if (event.deltaY > 0) {

      if (transTT > 0) {
        if (ttEnd == true) {
          transTT = transTT - 101;
          ttEnd = false;
          twEnd = false;
          console.log(ttEnd);
          document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
          document.getElementById("socialScrollArrowRight").style.filter = "opacity(70%)";
          document.querySelector(".SocialsTT").style.transition = "0.5s";
          document.querySelector(".body").style.overflowY = "hidden";
          document.querySelector(".SocialsTT").style.transform = "translate(" + transTT +"vw, -100vh)";
        }
      }

      else {

        if (transTW > 0) {
          if (twEnd == true) {
            transTW = transTW - 101;
            ttEnd = false;
            twEnd = false;
            console.log(twEnd);
            document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
            document.getElementById("socialScrollArrowRight").style.filter = "opacity(30%)";
            document.querySelector(".SocialsTW").style.transition = "0.5s";
            document.querySelector(".body").style.overflowY = "hidden";
            document.querySelector(".SocialsTW").style.transform = "translate(" + transTW +"vw, -200vh)";
          }
        }
      }
    }
  }
});

function clickScrollRight() {
  if (ttEnd == true && transTT == 101 && transTW == 101 && twEnd == true) {
    transTT = 0;
    ttEnd = false;
    document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
    document.getElementById("socialScrollArrowRight").style.filter = "opacity(70%)";
    document.querySelector(".SocialsTT").style.transition = "0.5s";
    document.querySelector(".body").style.overflowY = "hidden";
    document.querySelector(".SocialsTT").style.transform = "translate(" + transTT +"vw, -100vh)";
  } else if (ttEnd == true && transTW == 101 && transTT == 0 && twEnd == true) {
    transTW = 0;
    twEnd = false;
    document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
    document.getElementById("socialScrollArrowRight").style.filter = "opacity(30%)";
    document.querySelector(".SocialsTW").style.transition = "0.5s";
    document.querySelector(".body").style.overflowY = "hidden";
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
    document.querySelector(".body").style.overflowY = "hidden";
    document.querySelector(".SocialsTT").style.transform = "translate(" + transTT +"vw, -100vh)";
  } else if (ttEnd == true && transTW == 0 && transTT == 0 && twEnd == true) {
    transTW = 101;
    twEnd = false;
    document.getElementById("socialScrollArrowLeft").style.filter = "opacity(70%)";
    document.getElementById("socialScrollArrowRight").style.filter = "opacity(70%)";
    document.querySelector(".SocialsTW").style.transition = "0.5s";
    document.querySelector(".body").style.overflowY = "hidden";
    document.querySelector(".SocialsTW").style.transform = "translate(" + transTW +"vw, -200vh)";
  }
}
