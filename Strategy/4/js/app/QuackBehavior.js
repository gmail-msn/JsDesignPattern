//js/app/QuackBehavior.js

define(
	['jquery'],
	function($) {
		var QuackBehavior = function(){
			
		};
		QuackBehavior.prototype.quack = function(){
			throw new Error("This method must be overwritten");
		};
		
		return QuackBehavior;
	}
);