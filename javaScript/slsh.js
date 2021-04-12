var img01 = document.getElementById("fa01");
var img02 = document.getElementById("fa02");
var img03 = document.getElementById("fa03");
var desc01 = "Art by Baronu3 (www.instagram.com/baronu3/)";
var desc02 = "Art by Meii";
var desc03 = "Art by Pixy";

var imgs = [img01, img02, img03];
var imgDesc = [desc01, desc02, desc03];
var imgIndex = 0;
var imgLenght = 2;

function countIndex(direc) {
  if (direc == 0) {
    if (imgIndex == 0) {
      imgIndex = imgLenght;
    } else {
      imgIndex--;
    }
  } else {
    if (imgIndex == imgLenght) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
  }
}

function imgL() {
  countIndex(0);
  for (var i = 0; i <= imgLenght; i++) {
    if (i != imgIndex) {
      imgs[i].style.visibility = "hidden";
      imgs[i].style.position = "absolute";
    } else {
      imgs[i].style.visibility = "visible";
      imgs[i].style.position = "static";
      document.getElementById("faCredit").innerHTML = imgDesc[i];
    }
  }
}

function imgR() {
  countIndex(1);
  for (var i = 0; i <= imgLenght; i++) {
    if (i != imgIndex) {
      imgs[i].style.visibility = "hidden";
      imgs[i].style.position = "absolute";
    } else {
      imgs[i].style.visibility = "visible";
      imgs[i].style.position = "static";
      document.getElementById("faCredit").innerHTML = imgDesc[i];
    }
  }
}
