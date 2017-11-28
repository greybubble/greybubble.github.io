
var imageIndex = 0;

var images = ["comic_pages_150dpi/Page_2_Ink.jpg",
              "comic_pages_150dpi/Page_3_Ink.jpg",
              "comic_pages_150dpi/Page_4_Ink.jpg",
              "comic_pages_150dpi/Page_5_Ink.jpg",
              "comic_pages_150dpi/Page_6_Ink.jpg",
              "comic_pages_150dpi/Page_7_Ink.jpg",
              "comic_pages_150dpi/Page_8_Ink.jpg",
              "comic_pages_150dpi/Page_9_Ink.jpg",
              "comic_pages_150dpi/Page_10_Ink.jpg"];
/*
window.addEventListener("click", function(){
  console.log("Click!");
  document.getElementById("viewer").src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
  window.scrollTo(0,0);
}, false);
*/
$('#viewer').on('click', () => {
  console.log("Click viewer!");
  imageIndex = (imageIndex + 1) % images.length;
  document.getElementById("viewer").src = images[imageIndex];
  window.scrollTo(0,0);
});

$('.first').on('click', () => {
  console.log("Click first!");
  imageIndex = 0;
  document.getElementById("viewer").src = images[imageIndex];
  window.scrollTo(0,0);
});

$('.previous').on('click', () => {
  console.log("Click previous!");
  imageIndex = (imageIndex > 0) ? (imageIndex - 1) : 0;
  document.getElementById("viewer").src = images[imageIndex];
  window.scrollTo(0,0);
});

$('.next').on('click', () => {
  console.log("Click next!");
  imageIndex = (imageIndex < images.length - 1) ? (imageIndex + 1) : images.length - 1;
  document.getElementById("viewer").src = images[imageIndex];
  window.scrollTo(0,0);
});

$('.last').on('click', () => {
  console.log("Click last!");
  imageIndex = images.length - 1;
  document.getElementById("viewer").src = images[imageIndex];
  window.scrollTo(0,0);
});

$('.opt').css('cursor', 'pointer');
