//js/Quack
define(
	['QuackBehavior', 'Moo'],
	function(QuackBehavior, Moo) {
		var Quack = new Class({
			Extends : QuackBehavior,
			initialize : function() {
				new QuackBehavior();
			},
			quack : function() {
				console.log("Quack!");
			}
		
		});
		
		return Quack;
	}
);

