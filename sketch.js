function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)    //設定方框中心點為座標點
  background(0);      //背景玵色為0黑色
  noFill()            //不充滿顏色
  stroke(255)         //框線顏色為255白色
  var w=mouseX/10
    
 // ellipse(25,25,50,)  //座標()產生一個50直徑的圓
  //rect(25,25,50)      //方框座標
  //ellipse(50,50,25)   //右下角的小圓

  for(var j=0;j<height/50;j++)
{
for(var i=0;i<width/50;i++)
{
stroke("#219ebc") //顏色
ellipse(25+50*i,25+50*j,mouseX/10)  //座標()產生一個50直徑的圓
stroke("#d4a373")
rect(25+50*i,25+50*j,mouseY/4)  
stroke("#ccd5ae")
ellipse(50+50*i,50+50*j,25)   //右下角的小圓}

}
}
}