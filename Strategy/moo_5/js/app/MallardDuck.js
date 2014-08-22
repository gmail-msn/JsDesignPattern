//js/app/MallardDuck.js
define(
	['FlyWithWings', 'Duck', 'Quack'],
	function(FlyWithWings, Duck, Quack) {
		
		var MallardDuck = new Class({
			Extends : Duck,
			initialize : function() {
				new Duck();
				this.oFlyBehavior = new FlyWithWings();
				this.oQuackBehavior = new Quack();
			},
			display : function() {
				console.log("MallardDuck show");
			}
		});
	
				
		return MallardDuck;
	}
);