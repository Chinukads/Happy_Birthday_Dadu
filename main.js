noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/R0M3GV9T/th-1.jpg')
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
image(video, 0, 0, 300, 300);
filter(INVERT)
}

function take_snapshot(){
    Save('myFilterImage.png');
}

function modelLoaded(){
    console.log('Initializing PoseNet...... Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(results);

        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
        console.log(results);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}
