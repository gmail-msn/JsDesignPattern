//js/app/Goose.js
define(
	['jquery'],
	function($) {
		var Goose = function(){
			this.honk = function(){
				console.log("Honk!");
			};
		};
		
		return Goose;
	}
);