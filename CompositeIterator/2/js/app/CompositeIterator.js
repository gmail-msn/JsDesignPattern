//js/app/CompositeIterator.js
define(
	['jquery', 'Iterator', 'require'],
	function($, Iterator, require) {
		var CompositeIterator = function(oIterator){
			//fix Menu is undefined
			var Menu = require('Menu');
			Iterator.apply(this);
			this.aStack = [oIterator];
			this.hasNext = function(){
				var oIterator = null;
				if(this.aStack.length === 0){
					return false;
				}else {
					oIterator = this.aStack[this.aStack.length-1];
					if(oIterator.hasNext() === false){
						this.aStack.pop();
						return this.hasNext();
					}else{
						return true;
					}
				}
			};
			this.next = function(){
				var oIterator = null;
				var oMenuComponent = null;
				if(this.hasNext()){
					oIterator = this.aStack[this.aStack.length-1];
					oMenuComponent = oIterator.next();
					if(oMenuComponent instanceof Menu){
						this.aStack.push(oMenuComponent.createIterator());
					}
					return oMenuComponent;
				}else{
					return null;
				}
			};	
			this.remove = function(){
				throw new Error("We are not supporting remove, just traversal");
			};
		};
		CompositeIterator.prototype = new Iterator();
		return CompositeIterator;
	}
);


