//js/app/Tea.js

define(
	['CaffeineBeverage', 'Moo'],
	function(CaffeineBeverage, Moo) {
		var Tea = new Class({
			Extends : CaffeineBeverage,
			initialize : function() {
				new CaffeineBeverage();
			},
			
			brew : function(){
				console.log("Steeping the tea!");
			},
			
			addCondiments : function(){
				console.log("Adding lemon!");
			}
			
		});
		
		return Tea;
	}
);
