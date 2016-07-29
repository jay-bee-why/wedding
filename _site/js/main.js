var windowHeight = '';
var jsHeroTarget = '';
var body = $('html, body');

function heroResize() {
	// Make the element the height of the window

	windowHeight = $(window).height();
	jsHeroTarget = $('.js--hero-resize');
	jsHeroTarget.css('height', windowHeight);

}

$(document).ready(heroResize);
$(window).resize(heroResize);



$(document).ready(function() {

var details_link = $("#details-link");
var story_link = $("#story-link");
var ceremony_link = $("#ceremony-link");
var travel_link = $("#travel-link");
var registry_link = $("#registry-link");

details_link.click(function(){
	body.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

story_link.click(function(){
	body.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

ceremony_link.click(function(){
	body.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

travel_link.click(function(){
	body.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

registry_link.click(function(){
	body.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500);
  return false;
});

});
