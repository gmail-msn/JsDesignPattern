//js/app/FlyBehavior.js
define(
	['jquery', "Moo"],
	function($, Moo) {
		var FlyBehavior = new Class({
			initialize : function() {
			
			}, 
			fly : function() {
				throw new Error("This method must be overwritten");
			}
		});
				
		return FlyBehavior;
	}
);