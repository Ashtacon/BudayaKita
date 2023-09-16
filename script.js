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
