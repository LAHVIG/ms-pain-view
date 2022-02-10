//this loads the gradient
function preload()
{
  imgContainer = loadImage('1.jpg');
}

function setup()
{
  createCanvas(800, 800);
  //define the position of color picker
  pickerPos = [20,height-200+25];
  //you get the idea
  pickerSize = [150,150];
  //make array of objects
  for(let i = 0; i < 3; i++)
  {
    buttons[i] = new Button(200,600+25,i);
  }
  //make drawlayer a grapics object
  drawLayer = createGraphics(width, height-200);
}

function draw()
{
  background(220);

  menu();

  fill(pickedColor);

  colorPicker();
  //do draw stuff on the drawlayer
  drawLayer.fill(pickedColor); 
  drawLayer.noStroke();
  if(mouseIsPressed)
  {
    drawLayer.stroke(pickedColor);
    drawLayer.strokeWeight(lineWeight);
    drawLayer.line(mouseX,mouseY,pmouseX,pmouseY);
  }
  //draw drawLayer
  image(drawLayer,0,0,width,height-200);
  //make the cursor
  circle(mouseX,mouseY,lineWeight);
}

//changes cursor size
function mousePressed() 
{
  if(mouseX > buttonPos[0] && mouseY > buttonPos[1] && mouseX < buttonPos[0] + 50 && mouseY < buttonPos[1] + 50)
  {
    drawLayer.clear();
  }
  for(let i = 0; i < 3; i++)
  {
    buttons[i].changeSize();
  }
}