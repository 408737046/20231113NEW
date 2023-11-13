var sound1
function preload(){
  sound1 = loadSound("justin-allan-arnold-ophelia.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#f2e9e4")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
var w=100  //圖形大小變數
var fc     //依照頻率變換的變數
function draw() {
  background("#f2e9e4");
  rectMode(CENTER)   //設定方框中心點為方框的座標點
  noFill()
  stroke("#9a8c98")
  if(sound1.isPlaying())
  {  //音樂有播放
    fc = map(analyzer.getLevel(),0,1,0,100)
  }
  
  else
  {  //音樂沒有播放時
    fc = map(mouseX,0,width,0,100)
  }
  for(var y=50;y<=height+50;y=y+w){
    for(var x=50;x<=width+50;x=x+w){
      
      stroke("#4a4e69")
      strokeWeight(3)
      rect(x,y,w+fc)
     
      stroke("#4a4e69")
      strokeWeight(3)
      rect(x+75,y,30+fc)
     
      stroke("#c9ada7")
      strokeWeight(3)
      ellipse(x+50,y,w+fc)
     
    }
 }

}
//按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  
  }

}
