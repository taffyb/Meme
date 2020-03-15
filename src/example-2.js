var fs = require('fs');
var PImage = require('pureimage');
var img = PImage.make(100,100);
var ctx = img.getContext('2d');

ctx.strokeStyle='rgba(50,205,50,1)';
ctx.fillStyle = 'rgba(50,205,50,1)';

ctx.beginPath();
//arc(centre:x, y, radius, start, end, anticlockwise)
ctx.arc(50,50,40,0,Math.PI,true); // Outer circle
ctx.closePath();
ctx.fill();

ctx.strokeStyle='rgba(255,0,0,1)';
ctx.fillStyle = 'rgba(255,0,0,1)';

ctx.beginPath();
//arc(centre:x, y, radius, start, end, anticlockwise)
ctx.arc(50,50,40,0,Math.PI,false); // Outer circle
ctx.closePath();
ctx.fill();

var filename='out2.png';
PImage.encodePNGToStream(img, fs.createWriteStream(filename)).then(() => {
    console.log(`wrote out to ${filename}`);
}).catch((e)=>{
    console.log("there was an error writing");
});