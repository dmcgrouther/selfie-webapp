(function () {
    var video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        photo =  document.getElementById('photo'),
        vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    navigator.getMedia({
        video: true,
        audio: false
    }, function(stream) {
        // video.src = vendorUrl.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    }, function(error) {

    });
    //below code is to take your own picture
    document.getElementById('capture').addEventListener('click', function() {
        context.drawImage(video, 0, 0, 400, 300);
        photo.setAttribute('src', canvas.toDataURL('image/png'));
        let humanOrNo = document.getElementById('#photo')
        detectFaces(humanOrNo)
    });
})();

// document.write('<script type="text/javascript" src="server.js" ></script>')

// //below is to get the facial recognition part working. from documentation.
// //https://cloud.google.com/vision/docs/face-tutorial documentation
// const vision = require('@google-cloud/vision');

// const client = new vision.ImageAnnotatorClient();

// const fs = require('fs');

// async function detectFaces(inputFile) {
//     // Make a call to the Vision API to detect the faces
//     const request = {image: {source: {filename: inputFile}}};
//     const results = await client.faceDetection(request);
//     const faces = results[0].faceAnnotations;
//     const numFaces = faces.length;
//     console.log(`Found ${numFaces} face${numFaces === 1 ? '' : 's'}.`);
//     return faces;
//   }
// //above from google.