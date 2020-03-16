var fs = require('fs');
var PImage = require('pureimage');

var fnt = PImage.registerFont('./fonts/SourceSansPro-Regular.ttf','Source Sans Pro');
fnt.load(() => {
    var img = PImage.make(200,200);
    var ctx = img.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.font = "48pt 'Source Sans Pro'";
    ctx.fillText("ABC", 80, 80);

    PImage.encodePNGToStream(img, fs.createWriteStream('out1.png')).then(() => {
        console.log("wrote out the png file to out.png");
    }).catch((e)=>{
        console.log("there was an error writing");
    });
});