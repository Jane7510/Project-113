function preload() {

}

function setup() {
    canvas = createCanvas(500, 470);
    canvas.center;
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 75, 57, 350, 350);
    rect(27, 40, 450, 5);
    fill(0, 0, 139);
    rect(27, 420, 450, 7);
    rect(470, 40, 7, 387);
    rect(20, 40, 7, 387);
}

function takeSnapshot() {
    save('Image.png');
}

function ChangeBg() {
   var color =  document.getElementById("color_name").value;

    tint(color);
}