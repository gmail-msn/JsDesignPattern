//js/app/DuckCall.js
define(
	['Quackable'],
	function(Quackable) {
		var DuckCall = function(){
			Quackable.apply(this);
			this.quack = function(){
				console.log("Squeak!");
			};
		};
		
		return DuckCall;
	}
);