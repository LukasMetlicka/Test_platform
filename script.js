$().ready(function(){
	$('.scott').click(function(){
		$(this).fadeOut('slow');
	});
	$(document).keydown(function(key){ //sprite control
		switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('.scott').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('.scott').animate({top:'-=10px'}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('.scott').animate({left: '+=10px'}, 'fast');
				break;
			// Down Array Pressed
			case 40:
				$('.scott').animate({top: '+=10px'}, 'fast');
				break;
		};
	});
});