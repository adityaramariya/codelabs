import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap';



let scrollPosition = window.scrollY;
const body = document.querySelector('body');
const header = document.querySelector('header nav');
const main = document.querySelector('main');
const main_height = main.offsetHeight;
const header_height = header.offsetHeight;


const add_class_on_scroll =  () => body.classList.add('scrolled');
const remove_class_on_scroll =  () => body.classList.remove('scrolled');


window.addEventListener('scroll', function (){
    scrollPosition = window.scrollY;

    if(scrollPosition > main_height - header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
})