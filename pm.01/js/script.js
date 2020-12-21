$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });
    $('.board').slick({
        initialSlide: 2,
        slidesToShow: 3,
        centerMode: true,
        draggable: false,
    })
});