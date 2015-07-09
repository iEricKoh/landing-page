// $(function() {
	// init controller
	// var controller = new ScrollMagic.Controller();

	// build scene
/*var scene = new ScrollMagic.Scene({
		triggerElement: "#trigger1"
	})
	.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
	.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
	.addTo(controller);*/

	// build scene
	/*var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
					// trigger a velocity opaticy animation
					.setVelocity("#animate", {opacity: 0}, {duration: 400})
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);*/

	// console.log('hello');
// });

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
  	 var controller = new ScrollMagic.Controller();

		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-intro"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-section-title.intro", {opacity: 1}, {duration: 1300})
			// .setVelocity(".site-section-title.feature-sub", {opacity: 1}, {duration: 1500})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-intro"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-section-title.intro-sub", {opacity: 1}, {duration: 1500})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-navbar"})
			// trigger a velocity opaticy animation
			.setVelocity("#site-navbar", {backgroundColor: '#000', backgroundColorAlpha: 0.85}, {duration: 800})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-whoweare"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-section.whoweare", {opacity: 1}, {duration: 700})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);



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
	    scrollToElement('#intro');
		});
  });
});