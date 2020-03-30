jQuery(document).ready(function() {
	if(window.location.href.indexOf('/vi/')){
		var showmore = '<a class="show-more hide-mobile">Hiển thị thêm <i class="fa fa-angle-down"></i></a><a class="show-more show-mobile">Hiển thị thêm <i class="fa fa-angle-down"></i></a>';
		var showless = '<a class="show-less hide-mobile">Hiển thị ít đi <i class="fa fa-angle-up"></i></a><a class="show-less show-mobile">Hiển thị ít đi <i class="fa fa-angle-up"></i></a>';
	} else {
		var showmore = '<a class="show-more hide-mobile">Show More <i class="fa fa-angle-down"></i></a><a class="show-more show-mobile">Show More <i class="fa fa-angle-down"></i></a>';
		var showless = '<a class="show-less hide-mobile">Show Less <i class="fa fa-angle-up"></i></a><a class="show-less show-mobile">Show Less <i class="fa fa-angle-up"></i></a>';
	}
	var width_device = jQuery(window).width();
	jQuery('.dotdotdot').dotdotdot();
	setTimeout(function(){
		jQuery('.dotdotdot').dotdotdot();
	}, 100);

	var wow = new WOW(
	  	{
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       true,       // trigger animations on mobile devices (default is true)
		    live:         true,       // act on asynchronously loaded content (default is true)
		    callback:     function(box) {
		      // the callback is fired every time an animation is started
		      // the argument that is passed in is the DOM node being animated
		    },
		    scrollContainer: null // optional scroll container selector, otherwise use window
	  	}
	);
	wow.init();

	// header();
	// jQuery(window).scroll(function(){
	// 	header();
	// });

	jQuery("#header").sticky({ 
		topSpacing: 0,
		bottomSpacing: jQuery('#footer').height() + 60,
		getWidthFrom: '50'
	});

	jQuery(document).on('click', '.small-breadcrumbs .current-page', function(event) {
		event.preventDefault();
		jQuery(this).closest('.box').toggleClass('open');
	});

	jQuery('.btn-informa span').click(function(){
        jQuery(this).toggleClass('active');
        jQuery('.sticky .show-sticky').slideToggle('slow');
    });


	if(jQuery('section.small-breadcrumbs').length > 0){
		var wi = jQuery('section.small-breadcrumbs .box .parent').width() + 1;
		var wy = wi + 15;
		jQuery('section.small-breadcrumbs .box .parent').css("width", wi + "px");
		jQuery('section.small-breadcrumbs .box .box-scroll-horizontal').css("width", "calc(100% - " + wi +"px)");
		jQuery('section.small-breadcrumbs .box .show-mobile.current-page').parent().css("width", "calc(100% - " + wi +"px)");
		jQuery('section.small-breadcrumbs .box .menu-breadcrumbs li').css("padding-left", wy +"px");
	}
	if(width_device < 768){
		if(jQuery('section.small-breadcrumbs').length > 0){
			var wi = jQuery('section.small-breadcrumbs .box .parent').width() + 1;
			var wy = wi + 15;
			jQuery('section.small-breadcrumbs .box .parent').css("width", wi + "px");
			jQuery('section.small-breadcrumbs .box .box-scroll-horizontal').css("width", "calc(100% - " + wi +"px)");
			jQuery('section.small-breadcrumbs .box .show-mobile.current-page').parent().css("width", "calc(100% - " + wi +"px)");
			jQuery('section.small-breadcrumbs .box .menu-breadcrumbs li').css("padding-left", wy +"px");
		}
	}

	if(jQuery('.dropdown-pagenavi').length > 0){
		jQuery('.dropdown-pagenavi').mCustomScrollbar();		
	}
	if(jQuery('.box-scroll-horizontal').length > 0){
		jQuery('.box-scroll-horizontal').mCustomScrollbar({axis: "x"});		
	}
	jQuery(window).resize(function(){
		if(jQuery(window).scrollTop() > 100){
			jQuery('#header .box-menu .menu-top').height(jQuery(window).height() - 61 - 360);	
		} else {
			jQuery('#header .box-menu .menu-top').height(jQuery(window).height() - 91 - 360);			
		}
        if(jQuery(this).width()>768){
        	if(jQuery('.box-scroll-horizontal').length > 0){
				jQuery('.box-scroll-horizontal').mCustomScrollbar({axis: "x"});		
			}
			if(jQuery('section.small-breadcrumbs').length > 0){
				var wi = jQuery('section.small-breadcrumbs .box .parent').width() + 1;
				var wy = wi + 15;
				jQuery('section.small-breadcrumbs .box .parent').css("width", wi + "px");
				jQuery('section.small-breadcrumbs .box .box-scroll-horizontal').css("width", "calc(100% - " + wi +"px)");
				jQuery('section.small-breadcrumbs .box .show-mobile.current-page').parent().css("width", "calc(100% - " + wi +"px)");
				jQuery('section.small-breadcrumbs .box .menu-breadcrumbs li').css("padding-left", wy +"px");
			}
        }else{
			if(jQuery('.box-scroll-horizontal').length > 0){
				jQuery('.box-scroll-horizontal').mCustomScrollbar("destroy");		
			}
			if(jQuery('section.small-breadcrumbs').length > 0){
				var wi = jQuery('section.small-breadcrumbs .box .parent').width() + 1;
				var wy = wi + 15;
				jQuery('section.small-breadcrumbs .box .parent').css("width", wi + "px");
				jQuery('section.small-breadcrumbs .box .box-scroll-horizontal').css("width", "calc(100% - " + wi +"px)");
				jQuery('section.small-breadcrumbs .box .show-mobile.current-page').parent().css("width", "calc(100% - " + wi +"px)");
				jQuery('section.small-breadcrumbs .box .menu-breadcrumbs li').css("padding-left", wy +"px");
			}
        }
    }).trigger("resize");

	jQuery(document).on('click', '.pagenavi .box-select span', function(event) {
		event.stopPropagation();
		jQuery(this).closest('.jump').toggleClass('open');
	});

	// jQuery(document).on('click', 'html, body', function(event) {
	// 	event.preventDefault();
	// 	jQuery('.pagenavi .jump').removeClass('open');
	// });

	jQuery('#header .box-menu .menu-top').height(jQuery('#header .box-menu').height() - 360);

    /*=================================================
        					Custom
	=====================================================*/
    jQuery(window).load(function() {   
        jQuery(".fr-loading").delay(1000).fadeOut("slow");
    });

    if(jQuery('.countnumber').length > 0){
	  	var a = 0;
	  	var oTop = jQuery('.countnumber').offset().top - window.innerHeight;

	  	if (a == 0 && jQuery(window).scrollTop() > (oTop + 120)) {	  		
	  
		  	jQuery({ countNum: jQuery('.countnumber > li:eq(0) .circle span').text()}).animate({
		    	countNum: jQuery('.countnumber > li:eq(0)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(this.countNum);
			    }
		  	});
			  
		  	jQuery({ countNum1: jQuery('.countnumber > li:eq(1) .circle span').text()}).animate({
		    	countNum1: jQuery('.countnumber > li:eq(1)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(Math.floor(this.countNum1));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(this.countNum1);
			    }
		  	});
			  
		  	jQuery({ countNum2: jQuery('.countnumber > li:eq(2) .circle span').text()}).animate({
		    	countNum2: jQuery('.countnumber > li:eq(2)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(Math.floor(this.countNum2));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(this.countNum2);
			    }
		  	});
			  
		  	jQuery({ countNum3: jQuery('.countnumber > li:eq(3) .circle span').text()}).animate({
		    	countNum3: jQuery('.countnumber > li:eq(3)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(Math.floor(this.countNum3));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(this.countNum3);
			    }
		  	});
			  
		  	jQuery({ countNum3: jQuery('.countnumber > li:eq(4) .circle span').text()}).animate({
		    	countNum3: jQuery('.countnumber > li:eq(4)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(4) .circle span').text(Math.floor(this.countNum3));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(4) .circle span').text(this.countNum3);
			    }
		  	});
	    	a = 1;
	  	}
		jQuery(window).scroll(function() {
		  	if (a == 0 && jQuery(window).scrollTop() > (oTop + 120)) {	  		
		  
		  	jQuery({ countNum: jQuery('.countnumber > li:eq(0) .circle span').text()}).animate({
		    	countNum: jQuery('.countnumber > li:eq(0)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(0) .circle span').text(this.countNum);
			    }
		  	});
			  
		  	jQuery({ countNum1: jQuery('.countnumber > li:eq(1) .circle span').text()}).animate({
		    	countNum1: jQuery('.countnumber > li:eq(1)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(Math.floor(this.countNum1));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(1) .circle span').text(this.countNum1);
			    }
		  	});
			  
		  	jQuery({ countNum2: jQuery('.countnumber > li:eq(2) .circle span').text()}).animate({
		    	countNum2: jQuery('.countnumber > li:eq(2)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(Math.floor(this.countNum2));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(2) .circle span').text(this.countNum2);
			    }
		  	});
			  
		  	jQuery({ countNum3: jQuery('.countnumber > li:eq(3) .circle span').text()}).animate({
		    	countNum3: jQuery('.countnumber > li:eq(3)').attr('data-count')
		  	} , {
			    duration: 4000,
			    easing:'linear',
			    step: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(Math.floor(this.countNum3));
			    },
			    complete: function() {
			      	jQuery('.countnumber > li:eq(3) .circle span').text(this.countNum3);
			    }
		  	});
		    	a = 1;
		  	}
		});
	}

	// Menu
	jQuery('#dark-shadow').click(function(event) {
		jQuery('#header-responsive .bottoms .menu').removeClass('active');
		jQuery('#header-responsive .bottoms .menu-mobile').removeClass('active');
		jQuery(this).removeClass('active');
	});

    jQuery(document).on('click', '#header-responsive .bottoms .menu', function(event) {
    	event.preventDefault();
    	if(jQuery(this).hasClass('active')){
    		jQuery(this).removeClass('active');
    		jQuery(this).parent().find('.box-menu').removeClass('active');
    		jQuery(this).parent().find('.menu-mobile').removeClass('active');
    		jQuery('#dark-shadow').removeClass('active');
    		jQuery('body').removeClass('none-scroll');
    	} else {
    		jQuery(this).addClass('active');
    		jQuery(this).parent().find('.box-menu').addClass('active');
    		jQuery(this).parent().find('.menu-mobile').addClass('active');
    		jQuery('#header-responsive .bottoms .book, #header-responsive .bottoms .box-book').removeClass('active');
    		jQuery('#dark-shadow').addClass('active');
    		jQuery('body').addClass('none-scroll');
    	}
    });

    jQuery(document).on('click', '#header .bottoms .menu', function(event) {
    	event.preventDefault();
    	if(jQuery(this).hasClass('active')){
    		jQuery(this).removeClass('active');
    		jQuery(this).parent().find('.box-menu').removeClass('active');
    		jQuery(this).parent().find('.menu-mobile').removeClass('active');
    		jQuery('#dark-shadow').removeClass('active');
    		jQuery('body').removeClass('none-scroll');
    	} else {
    		jQuery(this).addClass('active');
    		jQuery(this).parent().find('.box-menu').addClass('active');
    		jQuery(this).parent().find('.menu-mobile').addClass('active');
    		jQuery('#header .bottoms .book, #header .bottoms .box-book').removeClass('active');
    		jQuery('#dark-shadow').addClass('active');
    		jQuery('body').addClass('none-scroll');
    	}
    });

	// Tooltip
	if(jQuery('.slider-banner').length > 0){
		var slide = jQuery('.slider-banner');
		slide.owlCarousel({
		    loop:true,
		    margin:0,
		    autoplayTimeout:5000,
		    nav: false,
		    autoplay: false,
		    rewind: false,
		    items:1,
		    dots: true,
	        lazyLoad:true,
			autoplayHoverPause:true,
        	mouseDrag: false,
		    touchDrag: false,
		  	autoplaySpeed: 700,
		  	navSpeed: 700,
		  	dotsSpeed: 700,
		  	dragEndSpeed: 700,
			responsive:{
				0:{
					mouseDrag: true,
				    touchDrag: true,
				},
		        1200:{
					mouseDrag: false,
				    touchDrag: false,
		        }
		    },
		});

	  	// add animate.css class(es) to the elements to be animated
	  	function setAnimation ( _elem, _InOut ) {
		    // Store all animationend event name in a string.
		    // cf animate.css documentation
		    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		    _elem.each ( function () {
		      var jQueryelem = jQuery(this);
		      var jQueryanimationType = 'animated ' + jQueryelem.data( 'animation-' + _InOut );

		      jQueryelem.addClass(jQueryanimationType).one(animationEndEvent, function () {
		        jQueryelem.removeClass(jQueryanimationType); // remove animate.css Class at the end of the animations
		      });
		    });
	  	}

		// Fired before current slide change
	  	slide.on('change.owl.carousel', function(event) {
	      	var jQuerycurrentItem = jQuery('.owl-item', slide).eq(event.item.index);
	      	var jQueryelemsToanim = jQuerycurrentItem.find("[data-animation-out]");
	      	setAnimation (jQueryelemsToanim, 'out');
	  	});

		// Fired after current slide has been changed
	  	var round = 0;
	  	slide.on('changed.owl.carousel', function(event) {
	      	var jQuerycurrentItem = jQuery('.owl-item', slide).eq(event.item.index);
	      	var jQueryelemsToanim = jQuerycurrentItem.find("[data-animation-in]");	    
	      	setAnimation (jQueryelemsToanim, 'in');
	  	})
	  
	  	slide.on('translated.owl.carousel', function(event) {	    
	      	if (event.item.index == (event.page.count - 1))  {
		        if (round < 1) {
		          	round++
		        } else {
		          	slide.trigger('stop.owl.autoplay');
		          	var owlData = slide.data('owl.carousel');
		          	owlData.settings.autoplay = false; //don't know if both are necessary
		          	owlData.options.autoplay = false;
		          	slide.trigger('refresh.owl.carousel');
		        }
	      	}
	  	});
	}

    jQuery(document).on('click', '.nav-mobile .nav-tabs li a', function(event) {
    	event.preventDefault();
    	var value = jQuery(this).text();

    	jQuery(this).closest('.nav-mobile').find('span').text(value);
    });

    jQuery("[data-fancybox]").fancybox({});
});

function header(){
	var x = 0;
	if(jQuery(this).scrollTop() > 100)
    {  	
	    jQuery('#header').addClass('active');
	    x = jQuery(window).height() - 61;
    }
    else
    {
      	jQuery('#header').removeClass('active');
	    x = jQuery(window).height() - 91;
    }      
	jQuery('#header .box-menu .menu-top').height(x - 360);
}