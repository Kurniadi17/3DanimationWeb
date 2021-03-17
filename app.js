const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const ff7 = document.querySelector('.ff7 img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const orbs = document.querySelector('.orbs');

container.addEventListener("mousemove",(e)=>{
    let xAxis = ((window.innerWidth/2 - e.pageX)/25);
    let yAxis = ((window.innerHeight/2 - e.pageY)/25);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate In
container.addEventListener('mouseenter', e=>{
    card.style.transition = "none";
    //Popout
title.style.transform = "translateZ(150px)";
ff7.style.transform = "translateZ(200px) rotateZ(-10deg)";
description.style.transform = "translateZ(125px)";
purchase.style.transform = "translateZ(100px)";
orbs.style.transform = "translateZ(75px)";
});

//Animate Out
container.addEventListener("mouseleave",(e)=>{
    card.style.transform =`rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    ff7.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    orbs.style.transform = "translateZ(0px)";
});