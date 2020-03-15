var fs = require('fs');
var PImage = require('pureimage');
var img1 = PImage.make(100,50);

var ctx = img1.getContext('2d');
ctx.fillStyle = 'rgba(255,0,0, 0.5)';
ctx.fillRect(0,0,100,100);

PImage.encodePNGToStream(img1, fs.createWriteStream('out1.png')).then(() => {
    console.log("wrote out the png file to out.png");
}).catch((e)=>{
    console.log("there was an error writing");
});