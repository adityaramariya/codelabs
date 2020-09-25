import 'bootstrap/dist/js/bootstrap';
import 'babel-polyfill'
import fullpage from './vendor/fullpage'

var myFullpage = new fullpage('#fullpage', {
    menu: '#mainNavigation',
    autoScrolling:true,
    scrollHorizontally: true,
    responsiveWidth: 991,
});


// function isMobile() {
//     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }
//
// if (!isMobile()) {
// //place script you don't want to run on mobile here
//
//     let scrollPosition = window.scrollY;
//     const body = document.querySelector('body');
//     const header = document.querySelector('header nav');
//     const main = document.querySelector('main');
//     const main_height = main.offsetHeight;
//     const header_height = header.offsetHeight;
//
//
//     const add_class_on_scroll =  () => body.classList.add('scrolled');
//     const remove_class_on_scroll =  () => body.classList.remove('scrolled');
//
//
//     window.addEventListener('scroll', function (){
//         scrollPosition = window.scrollY;
//
//         if(scrollPosition > main_height - header_height) { add_class_on_scroll() }
//         else { remove_class_on_scroll() }
//     })
// }
//


