$(document).ready(function(){
	if ($(window).width() < 990) {
		$('.rslides img').attr('width','');
		$('.rslides img').attr('height','');
	}
	
	$('#mainMenu').prepend('<div class="menu-toggle">Menu<i class="fa fa-bars"></i></div>');
	$(document).on('click','.menu-toggle', function(){
		$('#mainMenu ul').slideToggle();
	});
	
});