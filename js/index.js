
function setup() { 
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(5);
  background(0);

} 

function draw() {
  background(map(sx, -5, 5, 0, 255));

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

  /* SMOOTHED VALUES */ /// to get smooth value 
  sx = smoothVal(rx, sx);
  sy = smoothVal(ry, sy);
  sz = smoothVal(rz, sz);
};

/* VALUE SMOOTHING */
function smoothVal(inputVal, outputVal) {
  var tarVal = inputVal;
  var calcVal = tarVal - outputVal;
  outputVal += calcVal * easing;
  return outputVal;
}