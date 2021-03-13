var scollY;

document.addEventListener("scroll", function(){
  console.log("test");
  scrollY = window.pageYOffset;
  var light = 150 - scrollY * 0.5;
  document.querySelector(".mouseLight").style.boxShadow = "0px 0px 0px " + light + "px #7289DA";
})
