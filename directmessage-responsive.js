$(document).ready(function(){
	if ($(window).width() <= 990) {
		$('.rslides img').attr('width','');
		$('.rslides img').attr('height','');
	}
	
	
	$('#mainMenu').prepend('<div class="menu-toggle">Menu<i class="fa fa-bars"></i></div>');

	$(document).on('click','.menu-toggle', function(){
		$('#mainMenu ul').slideToggle();
	});
	
	if ($(window).width() <= 768) {
		var stickyNavTop = $('#leftColumn').offset().top;
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop();
					  
			if (scrollTop + 75 > stickyNavTop) { 
				if($("#leftColumn:has('#mainMenu')").length > 0){
					$('#leftColumn').addClass('stick');
				}
			} else {
				if($("#leftColumn:has('#mainMenu')").length > 0){
					$('#leftColumn').removeClass('stick'); 
				}
			}
		};		
		stickyNav();
		$(window).scroll(function() {
			stickyNav();
		});
	}
	
});