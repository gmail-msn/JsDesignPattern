//js/app/RedheadDuck.js

define(
	['Duck', 'FlyWithWings', 'Quack', 'Moo'],
	function(Duck, FlyWithWings, Quack, Moo) {
		
		var RedheadDuck = new Class({
			Extends : Duck,
			initialize : function() {
				new Duck();
				this.oFlyBehavior = new FlyWithWings();
				this.oQuackBehavior = new Quack();
			},
			display : function() {
				console.log("RedheadDuck show");
			};
		});	
	
		return RedheadDuck;
	}
);