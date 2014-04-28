require.config({
	baseUrl: 'js',
    paths: {
        jquery: './libs/jquery-2.1.0.min',
        Chainable: './app/Chainable',
        
    }
});

 
require(['jquery', 'Chainable'], 
	function($, Chainable) {
		var oChainable = new Chainable();
		// This must return "21"
		console.log(oChainable.add(3).add(4).multiply(3).sub(3).toString());
});