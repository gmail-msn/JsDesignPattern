//js/app/QuackBehavior.js

define(
	['jquery', 'Moo'],
	function($, Moo) {
		
		var QuackBehavior = new Class({
			
			initialize : function() {
				console.log("QuackBehavior root class");
			},
			quack : function() {
				throw new Error("This method must be overwritten");
			}
		});
		
				
		return QuackBehavior;
	}
);