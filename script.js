// Native Code
// GSAP Animation
gsap.registerPlugin(TextPlugin);
gsap.to(".introduction", {duration: 3, delay:1.5, opacity: 0, y:2000});
gsap.to(".contain", {duration:2, delay:1.5, opacity:1});
gsap.from(".ani",{ duration: 3, y:100, delay:1, opacity: .5});
gsap.from("#navbar", {duration: 2, delay:2, opacity: 0});
gsap.from(".megamendung", {duration: 2, delay:1, y:-150, opacity: 0.1});

// JQuery Code
$(document).on("scroll",function(){
    setTimeout(function() {
      $(".introduction").addClass("hidden");
    }, 3000);

    
    if ($(document).scrollTop() > 100){
      $(".contain").addClass("geser");
    }else {
      $(".contain").removeClass("geser");
    }
    if ($(document).scrollTop() > 800){
      $(".nav").addClass("fixed-top");     
    }else {
      $(".nav").removeClass("fixed-top");
    }
});

$('.card-slide').slick({
  arrows: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


$('.carousel-slide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.col-sm-4').tilt({
  axis: x
})