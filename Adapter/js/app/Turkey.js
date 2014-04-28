//js/app/Turkey.js
define(
	['jquery'],
	function($) {
		var Turkey = function(){

		};
		Turkey.prototype.fly = function(){
			throw new Error("This method must be overwritten!");
		};
		Turkey.prototype.gobble = function(){
			throw new Error("This method must be overwritten!");
		};
		return Turkey;
	}
);