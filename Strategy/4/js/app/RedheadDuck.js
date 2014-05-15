//js/app/RedheadDuck.js

define(
	['Duck', 'FlyWithWings', 'Quack'],
	function(Duck, FlyWithWings, Quack) {
		var RedheadDuck = function(){
			Duck.apply(this);
			this.oFlyBehavior = new FlyWithWings();
			this.oQuackBehavior = new Quack();
		};
		RedheadDuck.prototype = new Duck();
		RedheadDuck.prototype.display = function(){
			alert("RedheadDuck show");
		};
		
		return RedheadDuck;
	}
);