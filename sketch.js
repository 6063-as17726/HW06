let font;
let size = 40;
let s0 = "The way a crow"; 
let xPos;
let yPos = 50; 
let yVel = 2;   
let words;

function preload() {
  // Load your font here if needed
  // font = loadFont("./ostrich-sans-regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(size);
  textAlign(LEFT, TOP);
  fill(255);
  words = s0.split(" ");
  xPos = width / 2;
}

function draw() {
  background(0, 191, 255); 
  let distance = height / words.length; 
  let y = distance; 
  let word;
  if (yPos > height) {
    yPos = -1 * words.length * 50
  } else {
    yPos += yVel;
  }
  for (let i = 0; i < words.length; i++) {
    word = words[i].toUpperCase();
    word_y = i * 50 + yPos;
    text(word, xPos, word_y);
  }
}
