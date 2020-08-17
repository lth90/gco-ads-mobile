jQuery(document).ready(function($) {
    // When user clicks button, open Modal
    $('.menu-open').click(function(){
        $(this).parent().toggleClass('active');
        $(this).next().toggleClass('active');

        var h_wd = $(window).height();
        var h_cl = $('.menu-close').innerHeight();
        var h_mn = h_wd - h_cl;
        $('.megamenu-mobile .menu-content .modal-body').height(h_mn);
    });

    // When user clicks Close (x), close Modal
    $('.menu-close .close').click(function(){
        $(this).parent().parent().parent().removeClass('active');
    });

    $(window).resize(function(){
        var w_window = $(window).width();

        if (w_window < 992) {
            var h_wd = $(window).height();
            var h_cl = $('.menu-close').innerHeight();
            var h_mn = h_wd - h_cl;
            $('.megamenu-mobile .menu-content .modal-body').height(h_mn);
        }
    });
});