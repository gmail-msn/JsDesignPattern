//js/app/FlyWithWings.js
define(
	['jquery', 'FlyBehavior'],
	function($, FlyBehavior) {
		var FlyWithWings = function(){
			FlyBehavior.apply(this);
		};
		FlyWithWings.prototype = new FlyBehavior();
		FlyWithWings.prototype.fly = function(){
			alert("Flap!Flap!");
		};
		
		return FlyWithWings;
	}
);