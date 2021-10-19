$(function () {
    AOS.init();
    $("#navbar").on("show.bs.collapse", function () {
        $("#navbarNav").addClass("glass navbar-dark rounded-3 p-3 mt-4");
    });
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 1,
        centeredSlides: true,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        speed: 1000,
        grabCursor: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });

});




$(document).ready(function () {
    $(".counter").each(function () {
        $(this)
            .prop("Counter", 0)
            .animate({
                Counter: $(this).text(),
            }, {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            });
    });
});