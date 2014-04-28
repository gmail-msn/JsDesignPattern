//js/main.js
require.config({
	baseUrl: 'js',
	paths: {
		jquery: './libs/jquery-2.1.0.min',
		Utils: '../../js/utils',
		CafeMenu: './app/CafeMenu',
		DinnerMenu: './app/DinnerMenu',
		Mattress: './app/Mattress',
		Menu: './app/Menu',
		MenuComponent: './app/MenuComponent',
		MenuItem: './app/MenuItem',
		PancakeHouseMenu: './app/PancakeHouseMenu'
	}
});

require(
	['Menu', 'Utils', 'MenuItem', 'Mattress'],
	function(Menu, Utils, MenuItem, Mattress) {
		new Utils();
		var oPanCakeHouseMenu = new Menu("Pancake House Menu", "Breakfast");
		var oDinnerMenu = new Menu("Dinner Menu", "Lunch");
		var oCoffeeMenu = new Menu("Cafe Menu", "Dinner");
		var oAllMenus = new Menu("ALL MENUS", "All menus combined");

		oAllMenus.add(oPanCakeHouseMenu);
		oAllMenus.add(oDinnerMenu);

		oDinnerMenu.add(new MenuItem("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89));
		oDinnerMenu.add(oCoffeeMenu);

		oCoffeeMenu.add(new MenuItem("Express", "Coffee from machine", false, 0.99));

		var oMattress = new Mattress(oAllMenus);
		console.log("---------------------------------------------");
		oMattress.printMenu();
		console.log("---------------------------------------------");
	}
);