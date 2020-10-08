$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    navigation : false,
    nav : false,
    navText: ['', ''],
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:5,
            nav:false
        },
        1000:{
            items:8,
            nav:true,
            loop:false
        }
    }
})
  });