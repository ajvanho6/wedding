
$(window).load(function(){
  var bride = $('.bride-content');
  var home = $('#home');
   $( ".spinner" ).fadeOut( "fast", function() {
    bride.addClass('visible');
  });
  home.addClass('visible');
});

$(document).ready(function() { 



//BACK TO TOP MONTHLY PAGE
var offset = 300,
    offset_opacity = 1200,
    scroll_top_duration = 700,
    $back_to_top = $('.cd-top');
//hide or show the "back to top" link
$(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');

});

 //smooth scroll to top
$back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
    );
});  


var gallery = $("#lightgallery");
if(gallery.length){
  $("#lightgallery").lightGallery({
    pager: true
  });
}
//Particles effect

var portfolio = $('#portfolio');
if(portfolio.length){
  particlesJS.load('particles-js', 'assets/css/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

}

//Smooth scroll

var home = $('#home');
if(home.length){

smoothScroll.init({
  updateURL: false
});
}


//Adding header sticky
var width = $( window ).width();
  if(width>767){
    menuScroll();
  }

$(window).resize(function(){
  if(width>767){
    menuScroll();
  }
});

var mob = $('.mob');
var colapse = $('.collapse');
mob.on('click', function(){
  //e.preventDefault();
  var self = $(this);
  self.each(function(){
    colapse.removeClass('in');
  });
});

//LIGHTBOX GALLERY 

});

function adjust(){
  var image = $('.contact-bg');
  var bodyheight = $(image).height();
  $("#contact").height(bodyheight);
}

function menuScroll(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 0) {
            $("nav.navbar.navbar-light.bg-faded").addClass("colorised");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("nav.navbar.navbar-light.bg-faded").removeClass("colorised");
        }
    });
}

(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));










