var brcounter = 0;

async function lol() {

  var barRol = 0;

  if (brcounter == 10) {
    for (var i = 0; i < 72; i++) {
      barRol = barRol + 5;
      document.getElementById("bodyID").style.transform = "rotateZ(" + barRol + "deg)";
      await sleep(10);
    }
  }

  if (brcounter == 10) {
    brcounter = 0;
  } else {
    brcounter++;
  }

}

function sleep(ms) {
  return new Promise((accept) => {
    setTimeout(() => {
      accept();
    }, ms);
  });
}
