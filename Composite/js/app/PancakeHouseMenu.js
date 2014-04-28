//js/app/PancakeHouseMenu.js
define(
	['jquery'],
	function($) {		
		var PancakeHouseMenu = function(){
			Menu.apply(this);
		};
		PancakeHouseMenu.prototype = new Menu();
	
		return PancakeHouseMenu;
	}
);

