var timer = 30;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble(){
    var clutter = "";

    for(var i = 1; i < 160; i++ ){
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector("#pbottom").innerHTML= clutter;
}


function runtTimer(){
    var timeout = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }else{
            clearInterval(timeout);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over!</h1>`;   
        }
    },1000)
}


document.querySelector("#pbottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

makeBubble();
runtTimer();
getNewHit();




