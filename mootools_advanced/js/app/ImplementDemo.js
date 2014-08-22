//js/app/ImplementDemo
define(
	['Moo'],
	function(Moo) {
		
		var ImplementDemo = new Class({
 
			//implements
			Implements: [Options,Events],
		 
			//constructor
			initialize: function(arg1, arg2, options) {
				this.arg1 = arg1;
				this.arg2 = arg2;
				this.setOptions(options); //use setOptions which was provided by the Options implementation!
			},
			
			//a custom method that does something and fires an "onCustomEvent" event
			myCustomMethod: function() {
				
				//do some processing and then...
				
				//...fire a custom event
				this.fireEvent('customEvent', [this.arg1, this.arg2]);
			}
		});
		return ImplementDemo;
	}
);