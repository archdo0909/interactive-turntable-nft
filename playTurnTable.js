let turntable, off;
let angle = 0;
var states = new Boolean(false);

var finishCallBack = function() {
  states = false
}

var music = document.getElementById("music");

function setup() {
  createCanvas(350, 350);
  background(150);
}

function preload() {
  turntable = loadImage("turntable.gif");
  off = loadImage("turntable_off.png");
}

function draw() {
  if (states == false) {
    clear();
    music.pause();
    image(off, 0, 0, 350, 350)
  } else {
    clear();
    image(turntable, 0, 0, 350, 350);
    music.play();
  }
}

function mousePressed() {
  if (states == false) {
    states = true
  } else {
    states = false
  }
}