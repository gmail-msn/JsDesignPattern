require.config({
		baseUrl: 'js',
    paths: {
        jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
        Singleton: './app/Singleton'
    }
});
 
require(['jquery', 'Utils', 'Singleton'], function($, Utils, Singleton) {
	new Utils();
    var oSingle1 = Singleton.getInstance();
	var oSingle2 = Singleton.getInstance();
	Singleton.staticMethod();
	console.log(new Singleton.getInstance().toString());
	console.log("oSingle1 is the same instance that oSingle2? " + (oSingle1 === oSingle2));
});