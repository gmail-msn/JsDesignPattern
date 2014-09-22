//js/app/ThisSelfDemo.js
define(
	['Moo'],
	function(Moo) {
		var self;
		
		var ThisSelfDemo = new Class({
			
			//Implements and initialize here...
			initialize: function() {
				
				//self is this
				self = this;
			},
			
			
			myFn : function() {
	            
	            //call this class' myCustomMethod2, passing the one argument for myCustomMethod
	            self.myCustomMethod2("");
	 
	        },
			
			//a custom method that does anything you want
			myCustomMethod: function(arg) {
				
				//create a function where "this" is always the current class instance
				var myFn = function() {
					
					this.myCustomMethod2(arg);
					
				}.bind(this); //makes "this" always mean this class instance
				
			},
		
			//another custom method
			myCustomMethod2: function(arg) {
		
				//do anything here too!
				console.log("myCustomMethod2");
			}
		});
        
        
		return ThisSelfDemo;
	}   
);      