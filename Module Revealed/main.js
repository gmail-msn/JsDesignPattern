require.config({
	paths: {
		jquery: '../js/libs/jquery-2.1.0.min',
		Utils: '../js/utils',
		ModuleRevealed: './ModuleRevealed'
	},
	shim: {
		ModuleRevealed: {
			exports: 'ModuleRevealed'
		}
	}
});

require(
	['jquery', 'Utils', 'ModuleRevealed'],
	function($, Utils, ModuleRevealed) {
		new Utils();
		ModuleRevealed.init(document.getElementById('test'));
	}
);