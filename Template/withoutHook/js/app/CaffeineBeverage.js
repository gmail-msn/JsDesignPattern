//js/app/CaffeineBeverage.js
define(
	['jquery', 'Moo'],
	function($, Moo) {
				
		var CaffeineBeverage = new Class({
			initialize: function() {
			},
			prepareRecipe : function() {
				this.boilWater();
				this.brew();
				this.pourOnCup();
				this.addCondiments();
			},
			boilWater : function(){
				console.log("Put water on fire until the water starts boiling!");
			},
			pourOnCup : function(){
				console.log("Put beverage on Cup!");
			},
			brew : function(){
				throw new Error("This method mus be overwritten!");
			},
			addCondiments : function(){
				throw new Error("This method mus be overwritten!");
			}
			
		});
		
		return CaffeineBeverage;		
	}
);