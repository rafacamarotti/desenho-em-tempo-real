
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
    if(results.length >0){
        console.log(results);
        LeftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference= floor(LeftWristX - rightWristX);
        console.log("LeftwristX = "+LeftWristX+" rightwristX = "+rightWristX+" difference = "+difference);
    }
}
function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML = "Largura e altura serão = "+difference+"px";
   textSize(difference);
text('word', 100, 150);
fill(0, 102, 153);

    
}
