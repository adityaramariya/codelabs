import 'bootstrap/dist/js/bootstrap';
import 'babel-polyfill';
import fullpage from './vendor/fullpage';

var myFullpage = new fullpage('#fullpage', {
    anchors: ['home', 'about', 'about', 'work', 'services', 'services', 'contact'],
    menu: '#menu',
    scrollHorizontally: true,
    responsiveWidth: 991,
    css3: true,
     scrollingSpeed: 500,

    onLeave: function(origin){
        let body = document.body;
        //after leaving section 2
        console.log(origin.index)
        if(origin.index > 1)
        {
            body.classList.add("fixed__header");
        }
        else if(origin.index === 1)
        {
            body.classList.remove("fixed__header");
        }
    }
});

$(document).on('click', '#scrollToTop', function(){
    fullpage_api.moveTo('home', 1);
});

$(document).on('click', '.scrollToContact', function(){
    fullpage_api.moveTo('contact', 1);
});


// function to close navbar on the click of outside

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $("button.navbar-toggler").click();
        }
    });
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

