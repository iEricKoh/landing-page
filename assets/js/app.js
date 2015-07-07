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
  	 console.log('hello');

  	 var controller = new ScrollMagic.Controller();

  	 var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
			// trigger a velocity opaticy animation
			.setVelocity(".feature-box", {opacity: 1}, {duration: 1000})
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
  });
});