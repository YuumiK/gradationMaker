function setup(){
    colorMode(HSB, 360, 100, 100, 255);
    createCanvas(displayWidth, displayHeight, WEBGL);
    button = createButton("Save");
    button.mousePressed(saveImage);
    drawBackground();
}
 
function draw(){
    //drawBackground();
}

function saveImage(){
    saveCanvas(year()+'-'+month()+'-'+day()+'-'+hour()+'-'+minute()+'-'+second(), 'png');
}

function drawGradation(x, y, w, h, c){
  if(c.length != 4)
     return;
  noStroke();
  beginShape();
  fill(c[0]);
  vertex(x,y);
  fill(c[1]);
  vertex(x+w,y);
  fill(c[2]);
  vertex(x+w,y+h);
  fill(c[3]);
  vertex(x,y+h);
  endShape();
}
function drawBackground() {
    var c = new Array(4);
    for(i = 0; i < c.length; i++)
        c[i] = color(random(360), random(30, 60), random(150, 220), 255);
    drawGradation(-width, -height, 2*width, 2*height, c);
}
function mousePressed() {
    if(-width < mouseX && mouseX < 2*width && -height < mouseY && mouseY < 2*height)
        drawBackground();
}

function keyPressed(){
switch(keyCode)
  {
    case ENTER:
    case RETURN:
        drawBackground();
    break;
    default:
    break;
  }
}
