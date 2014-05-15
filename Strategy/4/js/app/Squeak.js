//js/app/Squeak.js

define(
	['QuackBehavior'],
	function(QuackBehavior) {
		var Squeak = function(){
			QuackBehavior.apply(this);
		};
		Squeak.prototype = new QuackBehavior();
		Squeak.prototype.quack = function(){
			alert("Squeeze");
		};
		
		return Squeak;
	}
);