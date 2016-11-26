$('document').ready(function() {
	if($(document).width() > 1000) {
		$('.responsive-card').outerWidth('25%');
	}
	else {
		$('.responsive-card').outerWidth('100%');
	}
})
