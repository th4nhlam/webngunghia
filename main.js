let stars=document.getElementById("stars");
let moon=document.getElementById("moon");
let behind=document.getElementById("behind");
let front=document.getElementById("front");
let button=document.getElementById("btn");
let text=document.getElementById("text");

window.addEventListener('scroll',function(){
    let value=window.scrollY;
    stars.style.left=value*0.25+'px';
    moon.style.top=value*1.05+'px';
    behind.style.top=value*0.05+'px';
    front.style.top=value*0+'px';
    text.style.marginRight=value*4+'px';
})