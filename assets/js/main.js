jQuery(document).ready(function($) {
    $(".slick-testimonials").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '',
        nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    // $(".slick-projects").slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     vertical: false,
    //     prevArrow: '',
    //     nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-down icon icon-next"></i></button>',
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 2,
    //                 vertical: false,
    //                 nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2,
    //                 vertical: false,
    //                 nextArrow: '<button class="slick-arrow slick-next" href="javascript:0"><i class="fal fa-angle-right icon icon-next"></i></button>',
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 vertical: true,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 2,
    //                 vertical: true,
    //             }
    //         },
    //         {
    //             breakpoint: 0,
    //             settings: {
    //                 slidesToShow: 2,
    //                 vertical: true,
    //             }
    //         },
    //     ]
    // });

    // var swiper = new Swiper('.swiper-container', {
    //     direction: 'vertical',
    //     slidesPerView: 'auto',
    //     freeMode: true,
    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //     },
    //     mousewheel: true,
    // });
});

jQuery(document).ready(function($) {
    var pos = $(window).scrollTop();  
    $(window).scroll(function(){
        var windowpos = $(window).scrollTop();
        if (windowpos > pos) {
            console.log('scrollDown');
            $('header').removeClass('active')
        } else {
            console.log('scrollUp');
            $('header').addClass('active');
        }
        pos = windowpos;
    });

    $(window).on("scroll",function() {
        var hb = $('header').height();
        if ($(this).scrollTop() > hb ) {
            // $('header').addClass('active');
        } else {
            $('header').addClass('active');
        }

        if ($(this).scrollTop() > 0 ) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    });

    $('.form-login .form-group .form-control').click(function(){
        var ac = $(this).parent().hasClass('active');

        if (!ac) {
            $(this).parent().addClass('active');
        }        
    });
    $('.form-login .form-group .form-control').focusout(function() {
        var vl = $(this).val();
        if (vl == "") {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    });

    $('.login-form .nation-title').click(function(){
        $(this).next().slideToggle( "slow" );
    });

    $('.login-form .nation-control li').click(function(){
        var crf = $(this).html();
        $( ".login-form .nation-title * " ).remove();
        $( ".login-form .nation-title" ).append(crf + '<i class="fal fa-angle-down icon icon-angle-down"></i>');
        $(this).parent().slideToggle( "slow" );
    });

    $('.banner-tab .tab-title-box').click(function(){
        $(this).next().slideToggle( "slow" );
        $(this).parent().toggleClass('active');
    });

    $('.projects-title .filter-box').click(function(e){
        e.preventDefault();
        $('.main-sidebars').addClass('active');
    });
    $('.main-sidebars').click(function(){
        $('.main-sidebars').removeClass('active');
    });
    $('.form-sidebars-content').click(function(e){
        e.preventDefault();
    });

    $('.sidebars-title').click(function(){
        $(this).next().slideToggle( "slow" );
    });
    $('.sidebars-box li').click(function(){
        var txt = $(this).children().text();
        $(this).parent().parent().prev().children().children('label').text(txt);
        $(this).parent().parent().slideToggle( "slow" );
    });

    $('.search-title').click(function(){
        $(this).next().slideToggle( "slow" );
    });

    var w_window = $(window).width();
    var wd_con = $('.container').width();
    var lf = (w_window - wd_con)/2;
    if (w_window < 992) {
        $('.projects-buttons a').css({'width': w_window,'margin-left': -lf});
    }

    $(window).resize(function(){
        var w_window = $(window).width();
        var wd_con = $('.container').width();
        var lf = (w_window - wd_con)/2;

        if (w_window >= 992) {
            $('.menu-box').height('100%');

            $('.sidebar-site .sidebar-content').show('slow');
        } else {
            $('.sidebar-site .sidebar-content').hide('slow');

            $('.projects-buttons a').css({'width': w_window,'margin-left': -lf});
        }
    });

    AOS.init({
        easing: 'ease-in-out-sine'
    });
});