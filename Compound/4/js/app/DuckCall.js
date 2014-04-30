//js/app/RubberDuck.js
define(
	['Quackable'],
	function(Quackable) {
		var RubberDuck = function(){
			Quackable.apply(this);
			this.quack = function(){
				console.log("Kwak!");
			};
		};
		
		return RubberDuck;
	}
);

