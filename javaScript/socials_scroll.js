var scollY;

document.addEventListener("scroll", function(){
  console.log("test");
  scrollY = window.pageYOffset;
  var light = 0.5 - scrollY * 0.002;
  document.querySelector(".discord").style.boxShadow = "0 0 100px rgba(114,137,218, " + light + ")";
})
