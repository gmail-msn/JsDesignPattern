//js/app/DecoyDuck.js
define(
	['Duck', 'FlyNoWay', 'MuteQuack', "Moo"],
	function(Duck, FlyNoWay, MuteQuack, Moo) {
		
		var DecoyDuck = new Class({
			Extends : Duck,
			initialize : function() {
				new Duck();
				this.oFlyBehavior = new FlyNoWay();
				this.oQuackBehavior = new MuteQuack();
			},
			display : function() {
				console.log("DecoyDuck show");
			}
		});
				
		return DecoyDuck;
	}
);