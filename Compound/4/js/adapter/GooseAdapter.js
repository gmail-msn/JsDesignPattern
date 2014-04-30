//js/adapter/GooseAdapter.js
define(
	['jquery'],
	function($) {
		var GooseAdapter = function(oGoose){
			this.oGoose = oGoose;
		};
		GooseAdapter.prototype.quack = function(){
			this.oGoose.honk();
		};
		
		return GooseAdapter;
	}
);


