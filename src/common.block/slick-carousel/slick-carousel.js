import "slick-carousel"

$(document).ready(function(){
    $('.slick-carousel').slick({
        adaptiveHeight: false,
        autoplay: true,
        dots: true,
        // dotsClass: 'slick-dots slick-carousel__dots',
        speed: 150,
        prevArrow: '<i class="material-icons slick-carousel__arrow slick-carousel__arrow_prev">expand_more</i><div></div>',
        nextArrow: '<i class="material-icons slick-carousel__arrow slick-carousel__arrow_next">expand_less</i>'
        }
    );
});