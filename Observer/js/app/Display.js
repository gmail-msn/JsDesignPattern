//js/app/Display.js
define(
	function() {
		var Display = function(){
			this.display = function(){
				throw new Error("This method must be overwritten!");
			};
		};
		return Display;
	}
);