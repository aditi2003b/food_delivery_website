//The querySelector() method returns the first element that matches a CSS selector.
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

//Toggle between adding and removing a class name from an element with JavaScript.
menu.onclick = () =>{
// menu.classList.toggle('.fa-times');        this is not working
navbar.classList.toggle('active');
    
}

// remove a class name from an element with JavaScript.
window.onscroll =() =>{
  navbar.classList.remove('active');  
}
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();