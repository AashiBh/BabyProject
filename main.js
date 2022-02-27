var object = [];
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Baby Detecting";
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 380, 380);
    objectDetector.detect(video, gotResult);
    if (object.label == "person") {
        document.getElementById("status").innerHTML = "Status: Baby Detected";
    }
    else {
        document.getElementById("status").innerHTML = "Status: Baby Not Detected";
    }

}
function modelLoaded() {
    console.log("model loaded");
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}