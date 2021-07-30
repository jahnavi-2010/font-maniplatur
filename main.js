
diff=0;
rightwristX=0;
leftwristX=0;







function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(560,80);
    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}
function modelLoaded()
{
    console.log("model is loaded");
}
function draw()
{
    background('#969A97');
   
    text('jahnavi',50,400);
    textSize(diff)
    document.getElementById("square_side").innerHTML="width and height of a square will be "+diff+"px";
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        diff=floor(leftwristX-rightwristX);
    }
    
}
