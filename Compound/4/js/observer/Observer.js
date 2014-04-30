//js/observer/Observer.js
define(
	['jquery'],
	function($) {
		var Observer = function(){
			this.update = function(){
				throw new Error("This method must be overwritten!");
			};
		};
		return Observer;
	}
);