var fs = require('fs');
var path = require('path');
var PImage = require('pureimage');
const BUILD_DIR='./images';

var pth = path.join(BUILD_DIR,"bird.jpg");
console.log(`input image: ${pth}`);
PImage.decodeJPEGFromStream(fs.createReadStream(pth)).then((img) => {
    console.log("size is",img.width,img.height);
    var img2 = PImage.make(img.width*2,img.height*2);
    var ctx = img2.getContext('2d');
    ctx.drawImage(img,
        0, 0, img.width, img.height, // source dimensions
        0, 0, img.width*2, img.width*2                 // destination dimensions
    );
    var fnt = PImage.registerFont('./fonts/SourceSansPro-Regular.ttf','Source Sans Pro');
    fnt.load(() => {
        ctx.fillStyle = '#ffffff';
        ctx.font = "30pt 'Source Sans Pro'";
        ctx.fillText("ABC", 80, img.height*2-10);

        pth = path.join(BUILD_DIR,"resized_bird.jpg");
        PImage.encodeJPEGToStream(img2,fs.createWriteStream(pth)).then(() => {
            console.log("done writing");
        });
    });
});