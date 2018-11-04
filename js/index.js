function toggleMenu() {
	var tm = document.getElementById("toggle-menu");
	var menu = document.getElementById("header_nav");
	
	if (!menu.classList.contains("toggle")) {
		menu.classList.add("toggle");
	} else		
		menu.classList.remove("toggle");
		
	if (!tm.classList.contains("on")) {
		tm.classList.add("on");
	} else
		tm.classList.remove("on");
}

$(document).ready(function(){
	$(".comments_owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		dots: true,
		smartSpeed: 1000
	});

	$('#domain_select').niceSelect();
});


