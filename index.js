$( document ).ready(function() {
height = $('.jumbotron').height();
$(window).scroll(function() {
  if( $(this).scrollTop() > height + 60 ) {
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

});