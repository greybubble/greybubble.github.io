
// Experiment in a color changing background using
// PIXI.ticker as the way of setting up the game loop

var screenH = window.innerHeight - 40,
    screenW = window.innerWidth - 40;

var renderer = PIXI.autoDetectRenderer(screenW, screenH);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

renderer.view.style.border = "10px solid black";

renderer.backgroundColor = 0x00f0a0;

//renderer.resize(512, 512);

renderer.render(stage);

window.addEventListener("resize", function(){
  console.log("Resize!");
  screenH = window.innerHeight - 40,
  screenW = window.innerWidth - 40;
  renderer.resize(screenW, screenH);
  renderer.render(stage);
});

var red = 0,
blue = 0,
green = 0,
rlimit = glimit = blimit = 0,
step = 1,
limitStep = 256;

const ticker = new PIXI.ticker.Ticker();
ticker.stop();
ticker.add((deltaTime) => {

  if (red < rlimit) {
    red += step;
  }
  if(green < glimit) {
    green += step;
  }
  if(blue < blimit) {
    blue += step;
  }
  if ( blue >= blimit && green >= glimit && blue >= blimit) {
    switch(Math.floor(Math.random()*8 - 0.01)) {
      case 0:
        rlimit = limitStep;
        glimit = limitStep;
        blimit = Math.floor(Math.random()*limitStep - .01);
        break;
      case 1:
        rlimit = limitStep;
        blimit = limitStep;
        glimit = Math.floor(Math.random()*limitStep - .01);
        break;
      case 2:
        blimit = limitStep;
        glimit = limitStep;
        rlimit = Math.floor(Math.random()*limitStep - .01);
        break;
      case 3:
        rlimit = limitStep;
        blimit = Math.floor(Math.random()*limitStep - .01);
        glimit = Math.floor(Math.random()*limitStep - .01);
        break;
      case 4:
        glimit = limitStep;
        blimit = Math.floor(Math.random()*limitStep - .01);
        rlimit = Math.floor(Math.random()*limitStep - .01);
        break;
      case 5:
        blimit = limitStep;
        rlimit = Math.floor(Math.random()*limitStep - .01);
        glimit = Math.floor(Math.random()*limitStep - .01);
        break;
      case 6:
        blimit = Math.floor(Math.random()*limitStep - .01);
        rlimit = Math.floor(Math.random()*limitStep - .01);
        glimit = Math.floor(Math.random()*limitStep - .01);
        break;
      case 7:
        rlimit = limitStep;
        glimit = limitStep;
        blimit = limitStep;
        break;
    }

    red = green = blue = Math.floor(Math.random()*limitStep - .01);;
  }

  console.log(hexColor(red, blue, green));
  renderer.backgroundColor = hexColor(red, green, blue);
  renderer.render(stage);

});
ticker.start();

var twoDigitHex = function(num) {
  var hexNum = "";
  if(num < 16){
    hexNum += "0" + num.toString(16);
  } else if(num < 256) {
    hexNum = num.toString(16);
  }
  return hexNum;
}

var hexColor = function(red, green, blue) {
  red %= 256;
  blue %= 256;
  green %= 256;
  return "0x" + twoDigitHex(red) + twoDigitHex(green) + twoDigitHex(blue);
}
