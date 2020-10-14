// JavaScript for final project website

let video = document.querySelector('video');

function changeColor() {
    const background = document.querySelector('body')
    background.style.backgroundColor = '#fa61b0'; 
    background.style.color = 'white';
}

video.addEventListener('play', changeColor);


