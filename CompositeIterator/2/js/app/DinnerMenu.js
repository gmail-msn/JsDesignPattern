//js/app/DinnerMenu.js
define(
	['jquery', 'Menu'],
	function($, Menu) {
		var DinnerMenu = function(){
			Menu.apply(this);
		};
		DinnerMenu.prototype = new Menu();
		return DinnerMenu;
	}
);