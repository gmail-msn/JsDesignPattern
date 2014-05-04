require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
		CaffeineBeverage : './app/CaffeineBeverage',
		Coffee: './app/Coffee',
		Tea: './app/Tea'
	}
});

require(
	['Utils', 'Coffee', 'Tea'],
	function(Utils, Coffee, Tea) {
		new Utils();
		var oCoffee = new Coffee();
		oCoffee.prepareRecipe();
		console.log("*********************************************************");
		var oTea = new Tea();
		oTea.prepareRecipe();
	}
);