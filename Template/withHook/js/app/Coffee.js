//js/app/Coffee.js
define(
	['CaffeineBeverage'],
	function(CaffeineBeverage) {
		var Coffee = function(){
			CaffeineBeverage.apply(this);
		};
		Coffee.prototype = new CaffeineBeverage();
		Coffee.prototype.brew = function(){
			console.log("Dripping Coffee through filter!");
		};
		Coffee.prototype.addCondiments = function(){
			console.log("Add Sugar and Milk!");
		};
		Coffee.prototype.customerWantsCondiments = function(){
			return confirm("Do you want sugar and milk?");
		};
		
		return Coffee;
	}
);