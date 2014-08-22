require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
		Moo: '../../../js/libs/mootools-core-1.5.0-full-nocompat',
		Duck: './Duck',
		Quack: './Quack',
		DecoyDuck: './app/DecoyDuck',
		FlyBehavior: './app/FlyBehavior',
		FlyNoWay: './app/FlyNoWay',
		FlyWithWings: './app/FlyWithWings',
		MallardDuck: './app/MallardDuck',
		MuteQuack: './app/MuteQuack',
		QuackBehavior: './app/QuackBehavior',
		RedheadDuck: './app/RedheadDuck',
		RubberDuck: './app/RubberDuck',
		Squeak: './app/Squeak'
	}
});

require(
	['Utils', 'DecoyDuck', 'MallardDuck', 'RubberDuck', 'Moo'],
	function(Utils, DecoyDuck, MallardDuck, RubberDuck, Moo) {
		new Utils();
		var oDecoyDuck = new DecoyDuck();
		oDecoyDuck.display();
		oDecoyDuck.performQuack();
		
		var oRubberDuck = new RubberDuck();
		oRubberDuck.performFly();
		
	}
);