//js/app/FlyWithWings.js
define(
	['jquery', 'FlyBehavior', 'Moo'],
	function($, FlyBehavior, Moo) {
	
		var FlyWithWings = new Class({
			Extends : FlyBehavior,
			initialize : function() {
				new FlyBehavior();
			},
			fly : function() {
				console.log("Flap!Flap!");
			}
		});
				
		return FlyWithWings;
	}
);