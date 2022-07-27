'use strict'

$('a.scroll-to').on('click', function(e){
   e.preventDefault();
   var anchor = $(this).attr('href');
   $('html, body').stop().animate({
         scrollTop: $(anchor).offset().top - 60
   }, 800);
});

$('.js-list li').on('click', function(e){
   e.preventDefault();
   $(this).toggleClass('active')
})

$('.js-choice-list a').on('click',function(e) {
   e.preventDefault();
   $('.js-choice-list a').removeClass('active');
   $(this).toggleClass('active');
});

//----анимация
function onEntry(entry) {
   entry.forEach(change => {
     if (change.isIntersecting) {
      change.target.classList.add('js-show');
     }
   });
}
 
 let options = {
   threshold: [0.5] };
 let observer = new IntersectionObserver(onEntry, options);
 let elements = document.querySelectorAll('._animation');
 
 for (let elm of elements) {
   observer.observe(elm);
}

//--табы
var tabContainers = $('.tab');
tabContainers.hide().filter(':first').show();
$('.tab-link__item').click(function (e) {
  e.preventDefault();
  tabContainers.hide();
  tabContainers.filter(this.hash).fadeIn(300);
  $('.tab-link__item').removeClass('active');
  $(this).addClass('active');
  return false;
}).filter(':first').click();

var tabContainers2 = $('.tab2');
tabContainers2.hide().filter(':first').show();
$('.question__item').click(function (e) {
  e.preventDefault();
  tabContainers2.hide();
  tabContainers2.filter(this.hash).fadeIn(300);
  $('.question__item').removeClass('active');
  $(this).addClass('active');
  return false;
}).filter(':first').click();


 new Swiper('.review-slider', {
   loop: true,
   touchRation: 1,
   speed: 800,
   effect: 'cube',
   cubeEffect: {
      slideShadows: true,
      shadow: true,
   },
   
   //effect: 'flip',
   //effect: 'coverflow',
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
});

$('.burger').on('click' ,function(){
   $('.header-menu').addClass('active');
})
$('.cross').on('click', function(){
   $('.header-menu').removeClass('active')
})

//---кнока ввверх
$(document).ready(function() { 
   var button = $('#button-up');	
   $(window).scroll (function () {
     if ($(this).scrollTop () > 300) {
       button.fadeIn();
     } else {
       button.fadeOut();
     }
   });	 
   button.on('click', function(){
      $('body, html').animate({
      scrollTop: 0
      }, 800);
      return false;
      });		 
});
