var cv = require('../lib/opencv');

cv.readImage("./files/coin1.jpg", function(err, im) {
  if (err) throw err;
  const t1 = Date.now();
  const retStr = cv.phash(im, 8);
  console.log(`time:${Date.now() - t1}, retStr:${retStr}`);
});
