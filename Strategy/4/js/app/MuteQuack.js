//js/app/MuteQuack.js

define(
	['QuackBehavior'],
	function(QuackBehavior) {
		var MuteQuack = function(){
			QuackBehavior.apply(this);
		};
		MuteQuack.prototype = new QuackBehavior();
		MuteQuack.prototype.quack = function(){
			//Don't do nothing!
		};
		
		return MuteQuack;
	}
);