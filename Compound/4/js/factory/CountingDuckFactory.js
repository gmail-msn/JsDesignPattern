//js/factory/CountingDuckFactory.js
define(
	['AbstractDuckFactory', 'QuackCounter', 'MallardDuck', 'RedheadDuck', 'DuckCall', 'RubberDuck'],
	function(AbstractDuckFactory, QuackCounter, MallardDuck, RedheadDuck, DuckCall, RubberDuck) {
		var CountingDuckFactory = function(){
			AbstractDuckFactory.apply(this);
		};
		CountingDuckFactory.prototype = new AbstractDuckFactory();
		CountingDuckFactory.prototype.createMallardDuck = function(){
			return new QuackCounter(new MallardDuck());
		};
		CountingDuckFactory.prototype.createRedheadDuck = function(){
			return new QuackCounter(new RedheadDuck());
		};
		CountingDuckFactory.prototype.createDuckCall = function(){
			return new QuackCounter(new DuckCall());
		};
		CountingDuckFactory.prototype.createRubberDuck = function(){
			return new QuackCounter(new RubberDuck());
		};
		
		return CountingDuckFactory;
	}
);