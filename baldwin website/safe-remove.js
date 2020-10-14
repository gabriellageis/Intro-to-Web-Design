// JavaScript for The Safe Remove Website

// date object - modify for each day of week
let dayOfWeek = new Date().getDay();
console.log(dayOfWeek);

// if statement for day of week to change background color
if (dayOfWeek == 0) {
    const background = document.querySelector('body');
    background.style.backgroundColor = '#c1cdf5'; 
} else if (dayOfWeek == 1) {
    const background = document.querySelector('body');
    background.style.backgroundColor = '#c1eff5'; 
} else if (dayOfWeek == 2) {
    const background = document.querySelector('body');
    background.style.backgroundColor = '#d5c1f5'; 
} else if (dayOfWeek == 3) {
    const background = document.querySelector('body');
    background.style.backgroundColor = '#f2c1f5'; 
} else if (dayOfWeek == 4) {
    const background = document.querySelector('body');
    background.style.backgroundColor = '#f5c1d3'; 
} else if (dayOfWeek == 5) {
    const background = document.querySelector('body');
    background.style.backgroundColor = '#c1f5c6'; 
} else if (dayOfWeek == 6) {
    const background = document.querySelector('body');
    background.style.backgroundColor = '#f5f4c1'; 
}   

// function 1: change title color when nav-item is mouseover (CSS property change)
let navItems = document.querySelectorAll('.nav-item');

let pageTitle = document.getElementById('title');


function changeTitleColor() {
    pageTitle.style.color = 'white';
}
function resetTitleColor() {
    pageTitle.style.color = 'black';
}

// mouseover on
navItems[0].addEventListener('mouseover', changeTitleColor);
navItems[1].addEventListener('mouseover', changeTitleColor);
navItems[2].addEventListener('mouseover', changeTitleColor);

// mouseover off
navItems[0].addEventListener('mouseout', resetTitleColor);
navItems[1].addEventListener('mouseout', resetTitleColor);
navItems[2].addEventListener('mouseout', resetTitleColor);


// function 2: change page title to quote when subtitle clicked (update page content)
let pageSubTitle = document.getElementById('subtitle');

function changeTitle() {
    let quoteText = '"Not everything that is faced can be changed, but nothing can be changed until it is faced." - James Baldwin';
    pageTitle.innerHTML = quoteText;
}

pageSubTitle.addEventListener('click', changeTitle);

