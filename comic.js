
var imageIndex = 0;

var images = ["comic_pages/Page_2_Ink.png",
              "comic_pages/Page_3_Ink.png",
              "comic_pages/Page_4_Ink.png",
              "comic_pages/Page_5_Ink.png",
              "comic_pages/Page_6_Ink.png",
              "comic_pages/Page_7_Ink.png",
              "comic_pages/Page_8_Ink.png",
              "comic_pages/Page_9_Ink.png",
              "comic_pages/Page_10_Ink.png"];

/*
window.addEventListener("click", function(){
  console.log("Click!");
  document.getElementById("viewer").src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
  window.scrollTo(0,0);
}, false);
*/

$.preloadImages = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    $('.content').append($('<img>',{class:'page', id:i, src:images[i]}));
    $('#'+i).hide();
  }
}

$.preloadImages(images);
$('#' + imageIndex).show();

$(document).ready(() => {

  $('.page').on('click', () => {
    console.log("Click viewer!");
    $('#' + imageIndex).hide();
    imageIndex = (imageIndex + 1) % images.length;
    $('#' + imageIndex).show();
  });

  $('.first').on('click', () => {
    console.log("Click first!");
    $('#' + imageIndex).hide();
    imageIndex = 0;
    $('#' + imageIndex).show();
  });

  $('.previous').on('click', () => {
    console.log("Click previous!");
    $('#' + imageIndex).hide();
    imageIndex = (imageIndex > 0) ? (imageIndex - 1) : 0;
    $('#' + imageIndex).show();
  });

  $('.next').on('click', () => {
    console.log("Click next!");
    $('#' + imageIndex).hide();
    imageIndex = (imageIndex < images.length - 1) ? (imageIndex + 1) : images.length - 1;
    $('#' + imageIndex).show();
  });

  $('.last').on('click', () => {
    console.log("Click last!");
    $('#' + imageIndex).hide();
    imageIndex = images.length - 1;
    $('#' + imageIndex).show();
  });

  $(document).keydown(function(e) {

      switch(e.which) {
          case 37: // left
          $('#' + imageIndex).hide();
          imageIndex = (imageIndex > 0) ? (imageIndex - 1) : 0;
          $('#' + imageIndex).show();
          break;

          case 39: // right\
          $('#' + imageIndex).hide();
          imageIndex = (imageIndex < images.length - 1) ? (imageIndex + 1) : images.length - 1;
          $('#' + imageIndex).show();
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  $('.opt').css('cursor', 'pointer');

  $(window).on('click', () => {
    window.scrollTo(0,0);
  });
});
