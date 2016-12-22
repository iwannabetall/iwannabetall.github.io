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
      '<a class="navbar-brand" href="#">Anna Zhao</a></div>'+
      '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
      '<ul class="nav navbar-nav navbar-right">'+
        '<li><a href="raisedbyasians.html">Save Money.</a></li>'+
        '<li class="dropdown">'+
          '<a href="diy.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">DIY<span class="caret"></span></a>'+
          '<ul class="dropdown-menu">'+
            '<li><a href="topomap.html">Topo Map</a></li>'+
            '<li><a href="lasercutmw.html">Laser Cut</a></li>'+
            '<li><a href="zhajiangmian.html">ZhaJiangMian</a></li>'+
          '</ul></li>'+
        '<li><a href="#">'+"I'm Hungry.</a></li>"+
        '<li><a href="#">Photos</a></li>'+
        '<li><a href="stupidq.html">Stupid Question(s)</a></li>'+
        '<li><a href="old.html">'+"I'm a grownup.</a></li></ul></div></div></nav>"
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