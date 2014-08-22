//js/app/Squeak.js

define(
	['QuackBehavior', 'Moo'],
	function(QuackBehavior, Moo) {
		var Squeak = new Class({
			Extends : QuackBehavior,
			initialize : function() {
				new QuackBehavior();
			},
			quack : function() {
				alert("Squeeze");
			}
		});
				
		return Squeak;
	}
);