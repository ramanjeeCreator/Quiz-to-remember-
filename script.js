let timeLeft=20;

let timer;

function startTimer(){

clearInterval(timer);

timeLeft=20;

document.getElementById("timerText").innerHTML=timeLeft;

timer=setInterval(function(){

timeLeft--;

document.getElementById("timerText").innerHTML=timeLeft;

if(timeLeft<=5){

document.getElementById("timerCircle").style.borderColor="#ef4444";

}

if(timeLeft<=0){

clearInterval(timer);

alert("Time Up!");

}

},1000);

}

document.querySelectorAll(".answer").forEach(function(btn){

btn.onclick=function(){

document.querySelectorAll(".answer").forEach(function(b){

b.classList.remove("selected");

});

this.classList.add("selected");

}

});

document.getElementById("nextBtn").onclick=function(){

clearInterval(timer);

alert("Next question will load in Part 2B.");

};