
var imageIndex = 1;

var images = ["comic_pages/Page_2_Ink.png",
              "comic_pages/Page_3_Ink.png",
              "comic_pages/Page_4_Ink.png",
              "comic_pages/Page_5_Ink.png",
              "comic_pages/Page_6_Ink.png",
              "comic_pages/Page_7_Ink.png",
              "comic_pages/Page_8_Ink.png",
              "comic_pages/Page_9_Ink.png",
              "comic_pages/Page_10_Ink.png"];

window.addEventListener("click", function(){
  console.log("Click!");
  document.getElementById("viewer").src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;

});
