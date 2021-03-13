var scollY;

document.addEventListener("scroll", function(){
  console.log("test");
  scrollY = window.pageYOffset;
  var light = 0.4 - scrollY * 0.002;
  var brightness = 100 - scrollY * 0.1;
  var saturation = 100 - scrollY * 0.5;
  document.querySelector(".discord").style.boxShadow = "0 0 100px 50px rgba(114,137,218, " + light + ")";
  document.querySelector(".background").style.filter = "blur(20px) brightness(" + brightness + "%) saturate(0%)";
  document.querySelector(".discord").style.filter = "saturate(" + saturation + "%)";
})
