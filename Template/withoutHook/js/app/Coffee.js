//js/app/Coffee.js
define(
	['jquery', 'CaffeineBeverage', 'Moo'],
	function($, CaffeineBeverage, Moo) {
		var Coffee = new Class({
			Extends : CaffeineBeverage,
			initialize : function() {
				new CaffeineBeverage();
			},
			brew : function() {
				console.log("Dripping Coffee through filter!");
			},
			addCondiments : function(){
				console.log("Add Sugar and Milk!");
			}
		});
		
		return Coffee;
	}
);
