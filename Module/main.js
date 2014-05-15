require.config({
	paths: {
		jquery: '../js/libs/jquery-2.1.0.min',
		Utils: '../js/utils',
		Module: './Module'
	}
});

require(
	['jquery', 'Utils', 'Module'],
	function($, Utils, Module) {
		new Utils();
		var oModule = Module();
        oModule.init();
	}
);