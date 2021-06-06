$(window).on('scroll', function () {
    //header fixed animation and control
    if ($(window).scrollTop() > 100) {
        $('header').addClass('header-fixed');
    } else {
        $('header').removeClass('header-fixed');
    }
    //     //back to top button control
    //     if ($(window).scrollTop() > 300) {
    //         $('#back-to-top').addClass('back-btn-shown');
    //     } else {
    //         $('#back-to-top').removeClass('back-btn-shown');
    //     }
});



$('.carousel').swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

        if(direction=='left'){
            $(this).carousel('next');
        }else if(direction=='right'){
            $(this).carousel('prev');
        }

    }
});

$('.dropdown').hover(function(e){ $(this).children('.dropdown-toggle').dropdown("toggle"); }, function(){ $(this).children('.dropdown-toggle').dropdown("toggle"); });

// $(window).resize(function(){
//     if($( window ).width() <= 1199)
//         $(".gov-info").removeClass("col-md-3").addClass("col-md-6");
//     else if($(".gov-info").hasClass("col-md-6"))
//         $(".gov-info").removeClass("col-md-6").addClass("col-md-3");
// });

$(document).on('click','.side-menu-wrap .side-menu-ul .sidenav__item .menu-plus-icon', function () {
    $(this).closest('.sidenav__item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
    $(this).closest('.sidenav__item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
    return false;
});
/*=========== Mobile Menu Open Control ============*/
$(document).on('click','.mobile-menu-toggle', function () {
    $('.side-nav-container').addClass('active');
});

/*=========== Mobile Menu Close Control ============*/
$(document).on('click','.side-menu-close', function () {
    $(".side-nav-container").removeClass('active');
});
