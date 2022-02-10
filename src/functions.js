//draws the menu
function menu()
{


  push();
  colorMode(RGB);
  noStroke();
  fill(120);
  rect(0,height-200,width,200);

  stroke(0);
  //draws colorpicker
  image(imgContainer,pickerPos[0],pickerPos[1],pickerSize[0],pickerSize[1],0,0,256,256);


  push();

  fill('red');
  rect(buttonPos[0],buttonPos[1],50);
  fill('black');
  noStroke();
  text('reset',buttonPos[0]+10,buttonPos[1]+25);
  pop();


  fill(pickedColor);
  noStroke();
  for(let i = 0; i < 3; i++)
  {
    buttons[i].display();
  }

  pop()
}

//makes the colorpicker work
function colorPicker() 
{   
  if(mouseIsPressed && mouseX > pickerPos[0] && mouseX < pickerPos[0]+pickerSize[1] && mouseY > pickerPos[1] && mouseY < pickerPos[1] + pickerSize[1])
  {
    pickedColor = get(mouseX,mouseY);
    pickedColor.pop();
  }
}