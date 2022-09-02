video="";

function preload() {
    video = loadVideo('video.mp4');
    video.hide();
}



function setup(){
     canvas= createCanvas(380,380);
     canvas.center();
     
}


function draw(){
    image(video,0,0,380,380);

    function start(){
        video.play();
    }
    
}


