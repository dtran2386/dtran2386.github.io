(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

// code for collapsing the "collapse" class on nav bar in mobile view
$(document).on('click',function(){
    $('.collapse').collapse('hide');
})

// attempt at rotating the caret icon upon click event. NOT WORKING SO FAR..
$('img').click(function(){
    var img = $('img');
    if(img.hasClass('north')){
        img.attr('class','west');
    } else {
        img.attr('class','north');
    }
}); // END CODE FOR CARET ICON ROTATION

// BEGINNING OF CODE FOR BANNER BACKGROUND IMAGE
function EasyPeasyParallax() {
	scrollPos = $(this).scrollTop();
	$('#banner').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
	$('#bannertext').css({
		'margin-top': (scrollPos/4)+"px",
		'opacity': 1-(scrollPos/250)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax();
	});
}); // END CODE FOR BACKGROUND IMAGE

// BEGINNING OF CODE FOR BACKGROUND IMAGE before SKILLS
function EasyPeasyParallax2() {
	scrollPos = $(this).scrollTop();
	$('#banner2').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyPeasyParallax2();
	});
}); // END CODE FOR BACKGROUND IMAGE

},{}]},{},[1])