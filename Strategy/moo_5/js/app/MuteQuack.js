//js/app/MuteQuack.js

define(
	['QuackBehavior', 'Moo'],
	function(QuackBehavior, Moo) {
	
		var MuteQuack = new Class({
			Extends : QuackBehavior,
			initialize : function() {
				new QuackBehavior();
			},
			quack : function() {
				//Don't do nothing!
				console.log("MuteQuack");
			}
		});
				
		return MuteQuack;
	}
);