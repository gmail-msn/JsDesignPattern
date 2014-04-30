require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
		GooseAdapter: './adapter/GooseAdapter',
		AbstractDuckFactory: './factory/AbstractDuckFactory',
		CountingDuckFactory: './factory/CountingDuckFactory',
		DuckFactory: './factory/DuckFactory',
		Observable: './observer/Observable',
		Observer: './observer/Observer',
		QuackObservable: './observer/QuackObservable',
		ConvertToIterator: './app/ConvertToIterator',
		DuckCall: './app/DuckCall',
		Flock: './app/Flock',
		Goose: './app/Goose',
		MallardDuck: './app/MallardDuck',
		Quackable: './app/Quackable',
		QuackCounter: './app/QuackCounter',
		Quackologist: './app/Quackologist',
		RedheadDuck: './app/RedheadDuck',
		RubberDuck: './app/RubberDuck'
		
	}
});

require(
	['CountingDuckFactory', 'Utils', 'Goose', 'GooseAdapter', 'Flock', 'Quackologist', 'QuackCounter'],
	function(CountingDuckFactory, Utils, Goose, GooseAdapter, Flock, Quackologist, QuackCounter) {
		new Utils();
		var oDuckFactory = new CountingDuckFactory();
		var oMallardDuck = oDuckFactory.createMallardDuck();
		var oDuckCall = oDuckFactory.createDuckCall();
		var oRedheadDuck = oDuckFactory.createRedheadDuck();
		var oRubberDuck = oDuckFactory.createRubberDuck();
		var oGoose = new Goose();
		var oGooseAdapter = new GooseAdapter(oGoose);

		var oFlockOfDucks = new Flock();
		oFlockOfDucks.add(oMallardDuck);
		oFlockOfDucks.add(oDuckCall);
		oFlockOfDucks.add(oRedheadDuck);
		oFlockOfDucks.add(oRubberDuck);
		oFlockOfDucks.add(oGooseAdapter);

		var oFlockOfMallards = new Flock();

		var oMallardDuck1 = oDuckFactory.createMallardDuck();
		var oMallardDuck2 = oDuckFactory.createMallardDuck();
		var oMallardDuck3 = oDuckFactory.createMallardDuck();
		var oMallardDuck4 = oDuckFactory.createMallardDuck();

		oFlockOfMallards.add(oMallardDuck1);
		oFlockOfMallards.add(oMallardDuck2);
		oFlockOfMallards.add(oMallardDuck3);
		oFlockOfMallards.add(oMallardDuck4);

		oFlockOfDucks.add(oFlockOfMallards);

		console.log("Duck simulator with Observer");

		var oQuackologist = new Quackologist();

		oFlockOfDucks.registerObserver(oQuackologist);

		oFlockOfDucks.quack();

		oFlockOfMallards.quack();

		console.log(QuackCounter.getQuacks());
	}
);