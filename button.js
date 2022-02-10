//class
class Button {
  //you insert position and index
  constructor(posX,posY,i)
  {
    this.x = posX;
    this.y = 40/2 + posY + i * 55;
    this.s = 40 - 15 * i;
    this.id = i;
  }
  //self explanatory
  display() 
  {
    push();
    ellipse(this.x,this.y,this.s);
    pop();
  }
  //do i really have to?
  changeSize() 
  {
    if(dist(mouseX,mouseY,this.x,this.y) < this.s/2)
    {
      lineWeight = sizeArr[this.id];
    }
  }
}
