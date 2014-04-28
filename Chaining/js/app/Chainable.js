define(['jquery'],
	function($) {
		var Chainable = function () {
			this.nNumber = 0;
		};
		Chainable.prototype.add = function (nNumber) {
			this.nNumber += nNumber;
			return this;
		};
		Chainable.prototype.multiply = function (nNumber) {
			this.nNumber *= nNumber;
			return this;
		};
		Chainable.prototype.sub = function (num) {
			this.nNumber -= num;
			return this;
		};
		Chainable.prototype.toString = function() {
			return this.nNumber.toString();
		};
		
		return Chainable;
});
