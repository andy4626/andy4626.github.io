$( document ).ready(function() {
height = $('.jumbotron').height();
$(window).scroll(function() {
  if( $(this).scrollTop() > height + 30 ) {
    $(".main-nav").addClass("main-nav-scrolled");
  } 
});//ends nav attachment to top

$('.down-arrow').hover(function(){
	$('.down-arrow').animate({height: "toggle"})
});//down arrow rollover effect

$('.button').hover(function(e){
	var self = this
	$(self).animate({opacity:".5"}, function(){
		$(self).animate({opacity: '1'})
	})
});//rollover on button

$('.down-arrow').on("click", function(){
		$('.down-arrow').animate({height: "toggle"}).hide();
	  $('html, body').animate({
             	scrollTop: height
         			},
         			1500);
});//ends hiding arrow and scrolling down page



  $(".to-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top-60
    }, 1000);
  });

  $(".to-project").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top-60
    }, 1000);
  });
  $(".to-blog").click(function() {
    $('html, body').animate({
        scrollTop: $("#blog").offset().top-60
    }, 1000);
  });
  $(".to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });


});