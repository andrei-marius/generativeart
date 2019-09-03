"use strict";

const artwork1 = document.querySelector("#artwork1");
const artwork2 = document.querySelector("#artwork2");
const artwork3 = document.querySelector("#artwork3");
const artwork4 = document.querySelector("#artwork4");
const artwork5 = document.querySelector("#artwork5");
const artwork6 = document.querySelector("#artwork6");
const artwork7 = document.querySelector("#artwork7");
const artwork8 = document.querySelector("#artwork8");
const artwork9 = document.querySelector("#artwork9");


for (let i = 100; i < 301; i=i+20) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.style.width = i  + 'px';
    newDiv.style.height = i  + 'px';
    artwork1.appendChild(newDiv);
}

for (let i = 0; i < 91; i=i+10) {
    let newDiv2 = document.createElement("div");
    newDiv2.classList.add("box");
    newDiv2.style.transform =  `rotate(${i}deg)`;
    artwork2.appendChild(newDiv2);
}

for (let i = 0; i < 201; i=i+10) {
    let newDiv3 = document.createElement("div");
    newDiv3.classList.add("circle");
    newDiv3.style.width = i  + 'px';
    newDiv3.style.height = i  + 'px';
    artwork3.appendChild(newDiv3);
}

for (let i = -90; i < 91; i=i+20) {
    let newDiv4 = document.createElement("div");
    newDiv4.classList.add("box");
    newDiv4.style.transform = `translate(${i}px, ${i}px)`;
    artwork4.appendChild(newDiv4);
}

for (let i = 1; i < 513; i=i*2) {
    let newDiv5 = document.createElement("div");
    newDiv5.classList.add("circle");
    newDiv5.style.width = i  + 'px';
    newDiv5.style.height = i  + 'px';
    artwork5.appendChild(newDiv5);
}

for (let i = -20; i <= 45; i=i+5) {
    let newDiv6 = document.createElement("div");
    newDiv6.classList.add("circle");
    newDiv6.style.transform = `translateX(${i-50}px)`;
    newDiv6.style.transform = `rotate(${i*4}deg)`;
    artwork6.appendChild(newDiv6);
}

for (let i = 0; i <= 200; i=i+10) {
    let newDiv7 = document.createElement("div");
    newDiv7.classList.add("circle");
    newDiv7.style.width = i  + 'px';
    newDiv7.style.height = i  + 'px';
    newDiv7.style.transform = `translate(${i}px, ${-i/2}px)`;
    artwork7.appendChild(newDiv7);
}

for (let i = 50; i <= 200; i=i+10) {
    let newDiv8 = document.createElement("div");
    newDiv8.classList.add("box");
    newDiv8.style.width = i  + 'px';
    newDiv8.style.height = i  + 'px';
    newDiv8.style.transform = `translateX(${i/2}px)`;
    newDiv8.style.transform = `rotate(${i}deg)`;
    artwork8.appendChild(newDiv8);
}

for (let i = 50; i <= 200; i=i+30) {
    let newDiv9 = document.createElement("div");
    let newDiv10 = document.createElement("div");
    newDiv9.classList.add("box");
    newDiv10.classList.add("circle");
    newDiv9.style.width = i  + 'px';
    newDiv10.style.width = i  + 'px';
    newDiv9.style.height = i  + 'px';
    newDiv10.style.height = i  + 'px';
    artwork9.appendChild(newDiv9);
    artwork9.appendChild(newDiv10);
}


