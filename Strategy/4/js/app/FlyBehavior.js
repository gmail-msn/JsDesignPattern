//js/app/FlyBehavior.js
define(
	['jquery'],
	function($) {
		var FlyBehavior = function(){
			
		};
		FlyBehavior.prototype.fly = function(){
			throw new Error("This method must be overwritten");
		};
		
		return FlyBehavior;
	}
);