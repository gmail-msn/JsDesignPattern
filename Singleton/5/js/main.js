require.config({
		baseUrl: 'js',
    paths: {
        jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
        Singleton: './app/Singleton',
		Moo: '../../../js/libs/mootools-core-1.5.0-full-nocompat'
    }
});
 
require(['jquery', 'Utils', 'Singleton'], function($, Utils, Singleton) {
	new Utils();
    var oSingle1 = Singleton.getInstance();
	var oSingle2 = Singleton.getInstance();
	console.log(oSingle1.toString());
	oSingle1.instanceMethod();
	oSingle1.testMethod();
	Singleton.staticMethod();
	console.log("oSingle1 is the same instance that oSingle2? " + (oSingle1 === oSingle2));
});