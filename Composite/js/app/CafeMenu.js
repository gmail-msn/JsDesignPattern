//js/app/CafeMenu.js
define(
	['jquery', 'Menu'],
	function($, Menu) {
		var CafeMenu = function(){
			Menu.apply(this);
		};
		CafeMenu.prototype = new Menu();
		return CafeMenu;
	}
);