require.config({
		baseUrl: 'js',
    paths: {
        jquery: './libs/jquery-2.1.0.min',
        singleton: './app/Singleton'
    }
});
 
require(['jquery', 'singleton'], function($, Singleton) {
    alert($().jquery);
    var oSingle1 = Singleton.getInstance;
		var oSingle2 = Singleton.getInstance;
		//alert(Singleton.toString());
		alert("oSingle1 is the same instance that oSingle2? " + (oSingle1 === oSingle2));
});