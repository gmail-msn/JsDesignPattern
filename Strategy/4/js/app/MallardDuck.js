//js/app/MallardDuck.js
define(
	['FlyWithWings', 'Duck', 'Quack'],
	function(FlyWithWings, Duck, Quack) {
		var MallardDuck = function(){
			Duck.apply(this);
			this.oFlyBehavior = new FlyWithWings();
			this.oQuackBehavior = new Quack();
		};
		MallardDuck.prototype = new Duck();
		MallardDuck.prototype.display = function(){
			alert("MallardDuck show");
		};
		
		return MallardDuck;
	}
);