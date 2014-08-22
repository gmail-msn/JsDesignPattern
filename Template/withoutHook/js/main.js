require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
		Moo: '../../../js/libs/mootools-core-1.5.0-full-nocompat',
		CaffeineBeverage : './app/CaffeineBeverage',
		Coffee: './app/Coffee',
		Tea: './app/Tea'
	}
});

require(
	['Utils', 'Coffee', 'Tea', 'Moo'],
	function(Utils, Coffee, Tea, Moo) {
		new Utils();
		var oCoffee = new Coffee();
		oCoffee.prepareRecipe();
		console.log("*********************************************************");
		var oTea = new Tea();
		oTea.prepareRecipe();
	}
);