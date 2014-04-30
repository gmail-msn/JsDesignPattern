//js/app/Espresso.js
define(
	['Beverage'],
	function(Beverage) {
		var Espresso = function() {
			Beverage.apply(this);
			this.sDescription = 'Espresso';
		};
		Espresso.prototype = new Beverage();
		Espresso.prototype.cost = function() {
			return 1.99;
		};
		Espresso.prototype.getDesp = function() {
			return this.sDescription;
		};
		
		return Espresso;
	}
);


