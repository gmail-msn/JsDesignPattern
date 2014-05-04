//js/elements/Screen.js
define(
	function() {
		var Screen = function(){

		};
		Screen.prototype.down = function(){
			console.log("The screen is down!");
		};
		Screen.prototype.up = function(){
			console.log("The screen is up!");
		};
		return Screen;
	}
);


