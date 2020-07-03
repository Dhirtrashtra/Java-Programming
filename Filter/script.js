var image = null;

function upload() {
  //Get input from file input
  var fileinput = document.getElementById("finput");
  //Make new SimpleImage from file input
  image = new SimpleImage(fileinput);
  //Get canvas
  var canvas = document.getElementById("can");
  //Draw image on canvas
  image.drawTo(canvas);
}

function makeGray() {
  //change all pixels of image to gray
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}
function makeRed(){
  var canvas = document.getElementById("can");
  for(var pixel of image.values()){
    var avg = "255";
    pixel.setRed(avg);
  }
  image.drawTo(canvas);
}
function makeClean(){
   var canvas = document.getElementById("can");
  var cxt = canvas.getContext("2d");
  cxt.clearRect(0,0,canvas.width,canvas.height)
}
function makeRainbow(){
  var canvas= document.getElementById("can");
  for(var pixel of image.values()){
    var y = pixel.getY();
    var w = image.getHeight();
    if(y>0 && y<w/7){
      pixel.setGreen("0");
      pixel.setBlue("211");
      pixel.setRed("148");
    }
    
  }
  image.drawTo(canvas);
}