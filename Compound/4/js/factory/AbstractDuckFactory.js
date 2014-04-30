//js/factory/AbstractDuckFactory.js
define(
	['jquery'],
	function($) {
		var AbstractDuckFactory = function(){

		};
		AbstractDuckFactory.prototype.createMallardDuck = function(){
			throw new Error("This method must be overwritten!");
		};
		AbstractDuckFactory.prototype.createRedheadDuck = function(){
			throw new Error("This method must be overwritten!");
		};
		AbstractDuckFactory.prototype.createDuckCall = function(){
			throw new Error("This method must be overwritten!");
		};
		AbstractDuckFactory.prototype.createRubberDuck = function(){
			throw new Error("This method must be overwritten!");
		};
		return AbstractDuckFactory;
	}

);