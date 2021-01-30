var img01 = document.getElementById("fa01");
var img02 = document.getElementById("fa02");
var img03 = document.getElementById("fa03");

var imgs = [img01, img02, img03];
var imgIndex = 0;
var imgLenght = 2;

function countIndex(direc) {
  if (direc == 0) {
    if (imgIndex == 0) {
      imgIndex = imgLenght;
    } else {
      imgIndex--;
    }
    alert(imgIndex);
  } else {
    if (imgIndex == imgLenght) {
      imgIndex = 0;
    } else {
      imgIndex++;
    }
    alert(imgIndex);
  }
}

function imgL() {
  alert("L");
  countIndex(0);
  for (var i = 0; i <= imgLenght; i++) {
    if (i != imgIndex) {
      imgs[i].visibility = "hidden";
      imgs[i].position = "absolute";
      alert("hidden");
    } else {
      imgs[i].visibility = "visible";
      imgs[i].position = "static";
      alert("visible");
    }
  }
}

function imgR() {
  alert("R");
  countIndex(1);
  for (var i = 0; i <= imgLenght; i++) {
    if (i != imgIndex) {
      imgs[i].visibility = "hidden";
      imgs[i].position = "absolute";
      alert("hidden");
    } else {
      imgs[i].visibility = "visible";
      imgs[i].position = "static";
      alert("visible");
    }
  }
}
