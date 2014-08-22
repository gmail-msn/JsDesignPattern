//js/app/FlyNoWay.js
define(
	['jquery', 'FlyBehavior', 'Moo'],
	function($, FlyBehavior, Moo) {
		var FlyNoWay = new Class({
			Extends : FlyBehavior,
			initialize : function() {
				new FlyBehavior();
			},
			fly : function() {
				//Don't do nothing.
				console.log("FlyNoWay");
			}
		});
				
		return FlyNoWay;
	}
);