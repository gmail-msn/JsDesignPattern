//js/Quack
define(
	['QuackBehavior'],
	function(QuackBehavior) {
		var Quack = function(){
			QuackBehavior.apply(this);
		};
		Quack.prototype = new QuackBehavior();
		Quack.prototype.quack = function(){
			alert("Quack!");
		};
		
		return Quack;
	}
);

