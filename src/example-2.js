/*
 * create image with black background and two vertical hemispheres of different colours 
 * and a black centre
 */

var fs = require('fs');
var PImage = require('pureimage');
var img = PImage.make(100,100);
var ctx = img.getContext('2d');
ctx.fillStyle = 'rgba(0,0,0,1)';
ctx.fillRect(0,0,100,100)

ctx.fillStyle = 'rgba(50,205,50,1)';
ctx.beginPath();
//arc(centre:x, y, radius, distance around:start, end, anticlockwise)
ctx.arc(50,50,40,Math.PI/2,Math.PI*1.5,true); // Outer circle
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'rgba(255,0,0,1)';
ctx.beginPath();
ctx.arc(50,50,40,Math.PI/2,Math.PI*1.5,false); // Outer circle
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'rgba(0,0,0,1)';
ctx.beginPath();
ctx.arc(50,50,20,0,Math.PI*2,false); // Outer circle
ctx.closePath();
ctx.fill();


var filename='out2.png';
PImage.encodePNGToStream(img, fs.createWriteStream(filename)).then(() => {
    console.log(`wrote out to ${filename}`);
}).catch((e)=>{
    console.log("there was an error writing");
});