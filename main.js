status=""

function setup()
{
    canvas = createCanvas(500,400)
    canvas.center()
    cam = createCapture(VIDEO)
    cam.hide()
}

function draw()
{
    image(cam, 0, 0, 500, 400)
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("statusresult").innerHTML = "Detecting Objects: "
}

function modelLoaded()
{
    console.log("Model Loaded!!!!!!")
    status = true;
}