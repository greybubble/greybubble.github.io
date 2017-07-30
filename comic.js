
// Experiment in a color changing background using
// PIXI.ticker as the way of setting up the game loop

var screenH = window.innerHeight - 20,
    screenW = window.innerWidth - 20;

var renderer = PIXI.autoDetectRenderer(screenW, screenH);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

var images = ["Phase_IV_Motion_Comic/Flat_Pages/Flat_PNG/Page_2_Flat.png",
              "Phase_IV_Motion_Comic/Flat_Pages/Flat_PNG/Page_3_Flat.png",
              "Phase_IV_Motion_Comic/Flat_Pages/Flat_PNG/Page_4_Flat.png"];

var comic;

var imageIndex = 0;

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var pages = [];

PIXI.loader.add(images).load(setup);


function setup() {

  renderer.view.style.border = "1px solid black";
  renderer.backgroundColor = 0x000000;

  comic = new PIXI.Container();

  for (var i = 0; i < images.length; i++) {
    var page = new PIXI.Sprite(PIXI.loader.resources[images[i]].texture);
    page.visible = false;
    comic.addChild(page);
  }
  comic.x = screenW / 8;
  comic.getChildAt(imageIndex).visible = true;
  resizeSprite(comic);
  stage.addChild(comic);
  screenH = comic.height;
  renderer.resize(screenW, screenH);
  renderer.render(stage);

}

//renderer.resize(512, 512);

window.addEventListener("resize", function(){
  console.log("Resize!");
  var ratio = (window.innerWidth - 30) / screenW;
  screenW = window.innerWidth - 30;

  stage.getChildAt(0).width = screenW * 0.75;
  stage.getChildAt(0).height = screenH * ratio;
  stage.getChildAt(0).x = screenW / 8;

  screenH = stage.getChildAt(0).height;

  renderer.resize(screenW, screenH);

  renderer.render(stage);
});

window.addEventListener("click", function(){
  console.log("Click!");
  stage.getChildAt(0).getChildAt(imageIndex).visible = false;
  imageIndex = (imageIndex + 1) % 3;
  stage.getChildAt(0).getChildAt(imageIndex).visible = true;
  renderer.view.scrollIntoView();
  renderer.render(stage);
});

window.addEventListener("keydown", function(event) {

  console.log("They key I pressed is: " + event.key);
});

window.addEventListener("keyup", function(event) {

  console.log("They key I released is: " + event.key);
});





function scaleRatio(width, height) {
  var hRatio = screenH / height,
      wRatio = screenW / width;

  console.log(wRatio + " " + hRatio);

  if (hRatio < wRatio)
    return hRatio;
  else {
    return wRatio;
  }
}

function resizeSprite(sprite) {
//  let spriteRatio = (screenW - 10) / sprite.width;

  let spriteRatio = (screenW * 0.75) / sprite.width;

  console.log("w:h:r - " + sprite.width + " " + sprite.height + " " + spriteRatio);

  sprite.scale.x = spriteRatio;
  sprite.scale.y = spriteRatio;

}
