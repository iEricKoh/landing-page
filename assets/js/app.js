require.config({
	paths: {
　		"jquery": "jquery.min",
		"bootstrap": "bootstrap.min",
		"TweenMax": "TweenMax.min",
		"indicators": "debug.addIndicators",
		"velocity": "velocity.min",
		"animationVelocity": "animation.velocity",
		"scrollmagic": "ScrollMagic.js"
	},
	shim: {
　　'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		'indicators':{
			deps: ['ScrollMagic'],
			exports: 'indicators'
		},
		'animationVelocity':{
			deps: ['ScrollMagic'],
			exports: 'animationVelocity'
		}
	}
});

require(['jquery', 'ScrollMagic', 'TweenMax', 'animationVelocity', 'indicators', 'bootstrap'], function ($, ScrollMagic){
  // some code here
  $(function() {
  	$('[data-toggle="popover"]').popover();

  	 var controller = new ScrollMagic.Controller();

		/*var scene = new ScrollMagic.Scene({triggerElement: "#trigger-intro"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-section-title.intro", {opacity: 1}, {duration: 1300})
			// .setVelocity(".site-section-title.feature-sub", {opacity: 1}, {duration: 1500})
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);*/

	/*	var scene = new ScrollMagic.Scene({triggerElement: "#trigger-intro"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-section-title.intro-sub", {opacity: 1}, {duration: 1500})
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);*/

		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-navbar"})
			// trigger a velocity opaticy animation
			.setVelocity("#site-navbar", {backgroundColor: '#1b1d20', backgroundColorAlpha: 0.95}, {duration: 800})
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		/*var scene = new ScrollMagic.Scene({triggerElement: "#trigger-whoweare"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-section.whoweare", {opacity: 1}, {duration: 700})
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);*/



		function scrollToElement(selector, time, verticalOffset) {
	    time = typeof(time) != 'undefined' ? time : 1000;
	    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	    element = $(selector);
	    offset = element.offset();
	    offsetTop = offset.top + verticalOffset;
	    console.log($('#navbar').height());
	    $('html, body').animate({
	        scrollTop: offsetTop - ($('#navbar').height()/2)
	    }, time);
		}

		$('.site-arrow-down').click(function() {
	    scrollToElement('#features');
		});

		$('a.qq-chat').on('click', function() {
			$('iframe[allowtransparency="true"]').contents().find('div#launchBtn').click();
		})

  });
});
