//js/app/RedheadDuck.js
define(
	['Quackable'],
	function(Quackable) {
		var RedheadDuck = function(){
			Quackable.apply(this);
			this.quack = function(){
				console.log("Quack!");
			};
		};
		
		return RedheadDuck;
	}
);