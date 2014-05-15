//js/app/RubberDuck.js

define(
	['Duck', 'FlyNoWay', Squeak],
	function() {
		var RubberDuck = function(){
			Duck.apply(this);
			this.oFlyBehavior = new FlyNoWay();
			this.oQuackBehavior = new Squeak();
		};
		RubberDuck.prototype = new Duck();
		RubberDuck.prototype.display = function(){
			alert("RubberDuck show");
		};
		
		return RubberDuck;
	}
);

