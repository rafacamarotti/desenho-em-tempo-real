noseX=0;
noseY=0;
difference=0;
rightWristX=0;
LeftWristX=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560,150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
 console.log('posenet incializado');
}
function gotPoses(results){
    if(results.lenght >0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+" noseY = "+noseY);
        LeftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(LeftWristX - rightWristX);
        console.log("LeftwristX = "+LeftWristX+" rightwristX = "+rightWristX+" difference = "+difference);
    }
}
function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML = "Largura e altura serão = "+difference+"px";
    fill('cyan');
    stroke('blue');
    square(noseX, noseY, difference);
}