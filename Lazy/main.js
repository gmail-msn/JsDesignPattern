require.config({
	paths: {
		jquery: '../js/libs/jquery-2.1.0.min',
		Utils: '../js/utils',
		Lazy: './Lazy'
	}
});

require(
	['jquery', 'Utils', 'Lazy'],
	function($, Utils, Lazy) {
		
		new Utils();
		var nCounter = 0;
		var aElements = ['Zero', 'First', 'Second', 'Third', 'Fourth'];
		var nIdTimeout = 0;
		var oLazy = new Lazy(document.getElementById('test'), aElements[nCounter], new Date());
		nIdTimeout = setInterval(function() {
			if(nCounter === 4)
			{
				clearInterval(nIdTimeout);
			}
			oLazy.update(aElements[nCounter++], new Date());
		}, 500);
	}
);