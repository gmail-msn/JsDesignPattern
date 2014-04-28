//js/app/Mattress.js
define(
	['jquery'],
	function($) {
		var Mattress = function(aMenus){
			this.aMenus = aMenus;
		};
		Mattress.prototype.printMenu = function(){
			this.aMenus.print();
		};
		return Mattress;
	}
);

