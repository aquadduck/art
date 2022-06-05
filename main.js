function preload ()
{}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 310);
}

function draw () {
    rect(20, 40, 40, 400)
    rect(580, 40, 40, 400)
    rect(40, 20, 580, 40)
    rect(40, 410, 580, 40)
    circle(45, 45, 80)
    circle(45, 430, 80)
    circle(600, 45, 80)
    circle(600, 430, 80)
}

function take_snapshot(){
    save('student_name.png')
}