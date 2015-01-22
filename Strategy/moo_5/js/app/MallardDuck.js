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
				this.swim();
			},
			display : function() {
				console.log("MallardDuck showing");
			},
			fly : function() {
				console.log("MallardDuck FlyWithWings, Flap!Flap!");
				this.oFlyBehavior.fly();
			},
			quack : function() {
				this.oQuackBehavior.quack(); 
			},
			swim : function() {
				this.parent();
			}
		});
	
				
		return MallardDuck;
	}
);