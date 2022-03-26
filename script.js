const hamburger=document.querySelector('#hamburger');
const navbar=document.querySelector('.navbar');
const navLink=document.querySelectorAll('.navlink');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('fa-times');
    navbar.classList.toggle('active');

})

window.onscroll=()=>{
    hamburger.classList.remove('fa-times');
    navbar.classList.remove('active');
}