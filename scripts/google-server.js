//below is to get the facial recognition part working. from documentation.
//https://cloud.google.com/vision/docs/face-tutorial documentation
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

const fs = require('fs');

async function detectFaces(inputFile) {
    // Make a call to the Vision API to detect the faces
    const request = {image: {source: {filename: inputFile}}};
    const results = await client.faceDetection(request);
    const faces = results[0].faceAnnotations;
    const numFaces = faces.length;
    console.log(`Found ${numFaces} face${numFaces === 1 ? '' : 's'}.`);
    return faces;
  }
