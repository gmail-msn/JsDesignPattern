//js/app/RubberDuck.js

define(
	['Duck', 'FlyNoWay', 'Squeak', 'Moo'],
	function(Duck, FlyNoWay, Squeak, Moo) {
		
		var RubberDuck = new Class({
			Extends : Duck,
			initialize : function() {
				new Duck();
				this.oFlyBehavior = new FlyNoWay();
				this.oQuackBehavior = new Squeak();
			},
			display : function() {
				console.log("RubberDuck show");
			}
		});
		
		return RubberDuck;
	}
);

