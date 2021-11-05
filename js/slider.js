$(document).ready(function (){
    $('.sites_body').slick({
        autoplay:false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    infinite:true,
                    autoplay:true,
                    autoplaySpeed: 10000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    infinite:true,
                    autoplay:true,
                    autoplaySpeed: 10000,
                }
            },
        ]
        }
    );
});
$(document).ready(function (){
    $('.slider,.sliders').slick({
            arrows:false,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            adaptiveHeight: true,
            autoplay:true,
            autoplaySpeed: 10000,
        }
    );
});