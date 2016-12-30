$(document).ready(function(){
	//determining window height and width
	var screen_height = $(window).height();
	var screen_width = $(window).width();
	console.log(screen_height);

	//for making navbar
	$('#navigation-container').html(
		'<nav class="navbar navbar-inverse navbar-static-top">'+
		'<div class="container"><div class="navbar-header">'+
      '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
        '<span class="sr-only">Toggle navigation</span>'+
        '<span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>'+
        '<span class="icon-bar"></span>'+
      '</button>'+
      '<a class="navbar-brand" href="https://iwannabetall.github.io" style="color: white;">ANNA ZHAO</a></div>'+
      '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
      '<ul class="nav navbar-nav navbar-right">'+
        '<li><a href="hat.html">ME</a></li>'+
        '<li>'+
          '<a href="projects.html">PROJECTS</a>'+
        '<li><a href="thoughts.html">THOUGHTS</a></li>' + 
		'<li><a href="notselfies.html">PHOTOS</a></li>'
	);

	//mobile menu

	$(".menu-bar").on("click", function(event){
		console.log("click")
		//(Just add the right CSS classes)
		// You need to to slide out the menu 
		$(".menu").addClass("open");
		$(".menu").css("display", "inline-block");
		// And slide over the page
		$(".wrap").addClass("open");


		// When that menu is slide out, any new clicks should close it ($(body).one...)
		event.stopPropagation();

		$("body").on("click", function(){
			console.log("click");
			$(".menu").removeClass("open");
			$(".menu").css("display", "none");
			// And slide over the page
			$(".wrap").removeClass("open");
		});

	});	

});