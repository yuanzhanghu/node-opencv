# node-opencv

[![Build Status](https://secure.travis-ci.org/peterbraden/node-opencv.svg)](http://travis-ci.org/peterbraden/node-opencv)
[![Coverage](http://codecov.io/github/peterbraden/node-opencv/coverage.svg?branch=master)](https://codecov.io/gh/peterbraden/node-opencv)

[OpenCV](http://opencv.org) bindings for Node.js. OpenCV is
the defacto computer vision library - by interfacing with it natively in node,
we get powerful real time vision in js.

People are using node-opencv to fly control quadrocoptors, detect faces from
webcam images and annotate video streams. If you're using it for something
cool, I'd love to hear about it!

## Difference to original version

1. added rotate_whiteBackground() to rotate with white background.
2. added phash():
    cv.phash(im, hash_sideLen);
    example: 
    cv.phash(im, 4): 1000000000000000
    cv.phash(im, 8): 1010000000000000000000000000000000000000000000000000000000000000
  refer to example/mat-phash.js for detail.
