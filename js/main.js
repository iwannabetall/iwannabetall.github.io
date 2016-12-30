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
      '<a class="navbar-brand" href="https://iwannabetall.github.io" style="color: white;"' + 
      'font-family: Source Sans Pro, Helvetica, sans-serif;'+ '>Anna Zhao</a></div>'+
      '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
      '<ul class="nav navbar-nav navbar-right" ' + 'style=' + '"'+ 'font-family: Source Sans Pro, Helvetica, sans-serif;'+'"' + '>'+
        '<li><a href="raisedbyasians.html">Save Money.</a></li>'+
        '<li>'+
          '<a href="diy.html">DIY</a>'+
        '<li><a href="hungry.html">'+"I'm Hungry.</a></li>"+
        '<li><a href="notselfies.html">Photos</a></li>'+
        '<li><a href="stupidq.html">Stupid Question(s)</a></li>'+
        '<li><a href="hat.html">'+"I'm a grown-up.</a></li></ul></div></div></nav>"
	);


	//width and height of poster, with mobile view
	if (screen_width>600) {
		//set the width and height of the poster image
		$("#poster").css("width", screen_width);
		$("#poster").css("height", screen_height);
		
		//set the position of the opening text
		$("#opening_text").css("margin-top", screen_height/8);
	} else {
		//set the width and height of the poster image
		$("#poster").css("display", "none");
		// $("#poster").css("position", "relative");
		// $("#poster").css("width", "100%");

		//set the position of the opening text
		$("#opening_text").css("margin-top", 50);
		$("#opening_text").css("padding", 5);

	}

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