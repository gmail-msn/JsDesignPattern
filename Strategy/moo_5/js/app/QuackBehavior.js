//js/app/QuackBehavior.js

define(
	['jquery', 'Moo'],
	function($, Moo) {
		
		var QuackBehavior = new Class({
			
			initialize : function() {
			
			},
			quack : function() {
				throw new Error("This method must be overwritten");
			}
		});
		
				
		return QuackBehavior;
	}
);