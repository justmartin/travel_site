/*
Project Name: SEA Travels
Author: Justin Martin
Developer from GA SEA
*/

$(document).ready(function() {

	var mn = $(".main-nav");
	    mns = "main-nav-scrolled";
	    hdr = $('header').height();

	$(window).scroll(function() {
	  if( $(this).scrollTop() > hdr ) {
	    mn.addClass(mns);
	  } else {
	    mn.removeClass(mns);
	  }
	});

	//hamburger display
	$('.hamburger').click(function(){
		$('ul').toggleClass('nav-height');
	})

	$('#main-nav a').click(function(){
		$('ul').toggleClass('nav-height');
	})

});

