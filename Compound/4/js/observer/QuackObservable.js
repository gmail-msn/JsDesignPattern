//js/observer/QuackObservable.js
define(
	['jquery'],
	function($) {
		var QuackObservable = function(){
			this.registerObserver = function(){
				throw new Error("This method must be overwritten!");
			};
			this.notifyObservers = function(){
				throw new Error("This method must be overwritten!");
			};
		};
		return QuackObservable;
	}
);