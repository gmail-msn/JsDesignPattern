//js/Duck.js
define(
	['jquery', 'Moo'],
	function($, Moo) {
		var Duck = new Class({
			inititalize : function() {
				this.oFlyBehavior = null;
				this.oQuackBehavior = null;
			},
			setFlyBehavior : function(oFlyBehavior) {
				this.oFlyBehavior = oFlyBehavior;
			},
			setQuackBehavior : function(oQuackBehavior) {
				this.oQuackBehavior = oQuackBehavior;
			},
			performFly : function() {
				this.oFlyBehavior.fly();
			},
			performQuack : function() {
				this.oQuackBehavior.quack();
			},
			swim : function() {
				console.log("Chop!");
			},
			display : function() {
				throw new Error("This method must be overwritten!");
			}
		});
		
		return Duck;
	}
);