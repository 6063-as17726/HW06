let font;

let size = 40;

let s0 = "The way a crow"; 
let xPos = width/2;
let yPos = 50; 
let yVel = 2;   


function preload() {
  //font = loadFont("./ostrich-sans-regular.ttf");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  textSize(24);
  textAlign(LEFT, TOP);
  fill(255);
  words = s0.split(" ");
}

function draw() {
  background(0, 191, 255); 
  let distance = height/words.length; 
  let y = distance; 
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toUpperCase(); 
    //if(words.length%2 ==1) {
     //midpoint = words.length+1/2; 
    //}
    //else if (word.length%2 ==0) {
      //midpoint = words.length/2; 
    //}
    //y = y + distance; 
    text (word, xPos, yPos);
    yPos+= yVel; 
    if (ypos>height) {
      yPos = 50 ; 
    } 
  } 
}
