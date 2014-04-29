require.config({
	baseUrl: 'js',
    paths: {
        jquery: '../../js/libs/jquery-2.1.0.min',
		Utils: '../../js/utils',
        Chainable: './app/Chainable',
        
    }
});

 
require(['jquery', 'Chainable', 'Utils'], 
	function($, Chainable, Utils) {
		new Utils();
		var oChainable = new Chainable();
		// This must return "21"
		console.log(oChainable.add(3).add(4).multiply(3).sub(3).toString());
});