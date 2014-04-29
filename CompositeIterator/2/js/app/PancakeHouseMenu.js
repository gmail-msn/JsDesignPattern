//js/app/PancakeHouseMenu.js
define(
	['jquery', 'Menu'],
	function($, Menu) {
		var PancakeHouseMenu = function(){
			Menu.apply(this);
		};
		PancakeHouseMenu.prototype = new Menu();
		return PancakeHouseMenu;
	}
);


