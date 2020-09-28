import 'bootstrap/dist/js/bootstrap';
import 'babel-polyfill'
import fullpage from './vendor/fullpage'

var myFullpage = new fullpage('#fullpage', {
    anchors: ['home', 'about', 'about', 'work', 'services', 'services', 'contact'],
    menu: '#menu',
    scrollHorizontally: true,
    responsiveWidth: 991,
    css3: true
});



function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) {
//place script you want to run on mobile here
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').removeClass('show');
    });
}

