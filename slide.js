var swiper = new Swiper(".swiper",{
    effect: "coverflow",
    grabCursor:true,
    centeredSlides:true,
    coverflowEffect: {
        rotate:0,
        stretch:0,
        depth:100,
        modifier:4,
        slideShadows:true,

    },
    loop:true,
    navigaation:{
        nextEl: ".swiper-button-next",
        nextEl: ".swiper-button-prev"
    },
    keyboard:{
        enabled:true
    },
    mousewheel:{
        thresholDelta:70
    },
    breakpoints:{
        560:{
            slidesPerView:2.5
        },
        768:{
            slidesPerView:3
        },
        1024:{
            slidesPerView:3
        }
    }
})