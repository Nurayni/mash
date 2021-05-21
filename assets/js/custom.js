$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
});
// hide navbar while click nav link in responsive
$(".navbar-nav li a").on('click', function(event) {
    $(".navbar-collapse").collapse('hide');
});

//Owl Carousal
$("#owl-slider").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navigation: true,
    nav: true,
    // navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
/* ---------------------------------------------
       portfolio filtering
       --------------------------------------------- */

var $portfolio = $('.portfolio');
if ($.fn.imagesLoaded && $portfolio.length > 0) {
    imagesLoaded($portfolio, function() {
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            filter: '*'
        });
        $(window).trigger("resize");
    });
}

$('.portfolio-filter').on('click', 'a', function(e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active');
    var filterValue = $(this).attr('data-filter');
    $portfolio.isotope({ filter: filterValue });
});


/*---------------------------------------------
 Portfolio popup
 ---------------------------------------------*/

$(".portfolio-gallery").each(function() {
    $(this).find(".popup-gallery").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

//COUNTER JS

$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// WOW JS
new WOW().init();

//AOS animation

// Client Slider

$('.client-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2800,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$(function() {
    $('.navbar-nav .nav-item').on('click', function() {
        $('.navbar-nav .nav-item.active').removeClass('active');
        $(this).addClass('active');
    });
});