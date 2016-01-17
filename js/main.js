var windowHeight = '';
var jsHeroTarget = '';

$(document).ready(function() {




});

$(document).ready(heroResize);
$(window).resize(heroResize);

function heroResize() {
	// Make the element the height of the window

	windowHeight = $(window).height();
	jsHeroTarget = $('.js--hero-resize');
	jsHeroTarget.css('height', windowHeight);

}
