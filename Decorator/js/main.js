require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../js/libs/jquery-2.1.0.min',
		Utils: '../../js/utils',
		Beverage: './app/Beverage',
		CondimentDecorator: './app/CondimentDecorator',
		Espresso: './app/Espresso',
		HouseBlend: './app/HouseBlend',
		Mocha: './app/Mocha',
		Whip: './app/Whip'
	}
});

require(
	['Utils', 'Espresso', 'Mocha', 'Whip'],
	function(Utils, Espresso, Mocha, Whip) {
		new Utils();
		var oEspressoWithMochaAndWhip = new Espresso();
		oEspressoWithMochaAndWhip = new Mocha(oEspressoWithMochaAndWhip);
		oEspressoWithMochaAndWhip = new Whip(oEspressoWithMochaAndWhip);

		console.log(oEspressoWithMochaAndWhip.getDescription());
		console.log(oEspressoWithMochaAndWhip.cost());
	}
);