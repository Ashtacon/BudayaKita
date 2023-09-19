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
      $(".home").removeClass("active");
    }else {
      $(".contain").removeClass("geser");
    }
    if ($(document).scrollTop() > 800){
      $(".nav").addClass("fixed-top");     
    }else {
      $(".nav").removeClass("fixed-top");
    }
});


// Menggunakan document.querySelectorAll untuk memilih elemen-elemen
let navbarlinks = document.querySelectorAll('#navbar .scrollto');

const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return;
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active');
    } else {
      navbarlink.classList.remove('active');
    }
  });
};

window.addEventListener('load', navbarlinksActive);
window.addEventListener('scroll', navbarlinksActive);
