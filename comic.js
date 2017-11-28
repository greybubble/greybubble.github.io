
var imageIndex = 1;

var comicWindow = window.document.getElementById("viewer");

var images = ["comic_pages_72dpi/Page_2_Ink.jpg",
              "comic_pages_72dpi/Page_3_Ink.jpg",
              "comic_pages_72dpi/Page_4_Ink.jpg",
              "comic_pages_72dpi/Page_5_Ink.jpg",
              "comic_pages_72dpi/Page_6_Ink.jpg",
              "comic_pages_72dpi/Page_7_Ink.jpg",
              "comic_pages_72dpi/Page_8_Ink.jpg",
              "comic_pages_72dpi/Page_9_Ink.jpg",
              "comic_pages_72dpi/Page_10_Ink.jpg"];



window.addEventListener("click", function(){
  console.log("Click!");
  document.getElementById("viewer").src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
  window.scrollTo(0,0);
}, false);
