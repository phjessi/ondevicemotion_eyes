/* VARS FOR LINE */
var xpos, ypos, xposp, yposp;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(5);
  background(0);
  xpos = width/2;
  ypos = height/2;
} 

function draw() {
  xpos += rx; // sx
  ypos -= ry; // sy
  
  line(xpos, ypos, xposp, yposp);
  
  xposp = xpos;
  yposp = ypos;
}


/* PREFS */
var easing = 0.5; // set between 0 - 1

/* VARS */
var rx, ry, rz, sx, sy, sz;
rx = ry = rz = sx = sy = sz = 0;

/* ONDEVICEMOTION */
// https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
window.ondevicemotion = function(event) {
  /* RAW VALUES */
  rx = event.accelerationIncludingGravity.x;
  ry = event.accelerationIncludingGravity.y;
  rz = event.accelerationIncludingGravity.z;

  /* SMOOTHED VALUES */
  sx = smoothVal(rx, sx);
  sy = smoothVal(ry, sy);
  sz = smoothVal(rz, sz);
};

/* VALUE MAPPING */
function mapVal(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

/* VALUE SMOOTHING */
function smoothVal(inputVal, outputVal) {
  var tarVal = inputVal;
  var calcVal = tarVal - outputVal;
  outputVal += calcVal * easing;
  return outputVal;
}