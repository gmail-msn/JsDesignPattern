//js/app/DuckFactory.js
define(
	['AbstractDuckFactory', 'MallardDuck', 'RedheadDuck', 'DuckCall', 'RubberDuck'],
	function(AbstractDuckFactory, MallardDuck, RedheadDuck, DuckCall, RubberDuck) {
		var DuckFactory = function(){
			AbstractDuckFactory.apply(this);
		};
		DuckFactory.prototype = new AbstractDuckFactory();
		DuckFactory.prototype.createMallardDuck = function(){
			return new MallardDuck();
		};
		DuckFactory.prototype.createRedheadDuck = function(){
			return new RedheadDuck();
		};
		DuckFactory.prototype.createDuckCall = function(){
			return new DuckCall();
		};
		DuckFactory.prototype.createRubberDuck = function(){
			return new RubberDuck();
		};
		return DuckFactory;
	}
);