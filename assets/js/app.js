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

  	/* var scene = new ScrollMagic.Scene({triggerElement: "#feature-box"})
			// trigger a velocity opaticy animation
			.setVelocity(".feature-box", {opacity: 1}, {duration: 1000})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);*/


		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-what-we-do"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-section-title.feature", {opacity: 1}, {duration: 1300})
			// .setVelocity(".site-section-title.feature-sub", {opacity: 1}, {duration: 1500})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

/*		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-feature-title"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-section-title.feature-sub", {opacity: 1}, {duration: 1500})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);*/

		/*var scene = new ScrollMagic.Scene({triggerElement: "#trigger-feature-content"})
			// trigger a velocity opaticy animation
			.setVelocity(".intro-wrapper", {opacity: 1}, {duration: 1800})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);*/

		var scene = new ScrollMagic.Scene({triggerElement: "#trigger-navbar"})
			// trigger a velocity opaticy animation
			.setVelocity(".site-navbar", {backgroundColor: '#000', backgroundColorAlpha: 0.85}, {duration: 800})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);



		function scrollToElement(selector, time, verticalOffset) {
	    time = typeof(time) != 'undefined' ? time : 1000;
	    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	    element = $(selector);
	    offset = element.offset();
	    offsetTop = offset.top + verticalOffset;
	    $('html, body').animate({
	        scrollTop: offsetTop
	    }, time);          
		}

		$('.site-arrow-down').click(function() {
	    scrollToElement('#intro-tools');
		});
  });
});