require.config({
	baseUrl: 'js',
    paths: {
        jquery: './libs/jquery-2.1.0.min',
		Utils: '../../js/utils',
        Duck: './app/Duck',
        MallardDuck: './app/MallardDuck',
		Turkey: './app/Turkey',
		TurkeyAdapter: './app/TurkeyAdapter',
		WildTurkey: './app/WildTurkey'
    }/*,
	shim: {
		MallardDuck: {
			deps: ['Duck'],
			exports: 'MallardDuck'
		},
		Turkey : {
			exports: 'Turkey'
		},
		TurkeyAdapter: {
			deps: ['Duck'],
			exports: 'TurkeyAdapter'
		},
		WildTurkey: {
			deps: ['Turkey'],
			exports: 'WildTurkey'
		}
	}*/
});

 
require(['jquery', 'Duck', 'MallardDuck', 'Turkey', 'TurkeyAdapter', 'WildTurkey', 'Utils'], 
	function($, Duck, MallardDuck, Turkey, TurkeyAdapter, WildTurkey, Utils) {
		new Utils();
		var oMallardDuck = new MallardDuck();
		var oWildTurkey = new WildTurkey();
		var oTurkeyAdapter = new TurkeyAdapter(oWildTurkey);

		oMallardDuck.fly();
		oMallardDuck.quack();

		oWildTurkey.fly();
		oWildTurkey.gobble();

		oTurkeyAdapter.fly();
		oTurkeyAdapter.quack();
});