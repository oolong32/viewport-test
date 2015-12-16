var sw = document.documentElement.clientWidth;
var vw = window.innerWidth;

// Append Viewport Values
$(document).ready(function() {
	$('.foo span').append(sw);
	$('.bar span').append(vw);
});

// Update Viewport Values
$(window).resize(function() {
sw = document.documentElement.clientWidth;
vw = window.innerWidth;
	$('.foo span').empty();
	$('.foo span').append(sw);
	$('.bar span').empty();
	$('.bar span').append(vw);
}); 
