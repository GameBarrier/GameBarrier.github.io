async function dc_main() {

  var ypos = 0;
  var count = 0;
  var sin = 0;
  var speed = 0.08;
  var amp = 10

  var dc_embed = document.getElementById('discord');

  while (1 + 1 == 2) {

    count++;
    sin = Math.sin(count * speed);
    ypos = sin * amp;

    dc_embed.style.transform = "translateY(" + ypos + "px)";
    await sleep(50);
  }

}

function sleep(ms) {
  return new Promise((accept) => {
    setTimeout(() => {
      accept();
    }, ms);
  });
}
