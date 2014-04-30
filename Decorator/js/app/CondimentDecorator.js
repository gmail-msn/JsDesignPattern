//js/app/CondimentDecorator.js
define(
	['Beverage'],
	function(Beverage) {
		var CondimentDecorator = function() {
			Beverage.apply(this);
		};
		CondimentDecorator.prototype = new Beverage();
		
		return CondimentDecorator;
	}
);