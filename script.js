const cvs = document.querySelector('#square');
const ctx = cvs.getContext('2d');

let x = 0;
let y = 50;

let stepX = 5;
let stepY = 2;

function draw(){
    ctx.fillStyle="#fff";
    ctx.fillRect(0,0,500,500);

    ctx.fillStyle="#000";
    ctx.fillRect(x,y,50,50);

    x += stepX;
    y += stepY;

    if(x < 0 || x > cvs.height-50){
        stepX = -stepX;
    }
    if(y < 0 || y > cvs.width-50){
        stepY = -stepY;
    }

    requestAnimationFrame(draw);
}

draw();