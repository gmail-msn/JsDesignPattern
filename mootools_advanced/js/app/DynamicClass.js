define(['jquery', 'nativeUtil', 'Moo'],
	function($, nativeUtil, Moo) {
		var DynamicClass = new Class({
			initialize : function() {
			
			},
			display : function() {
				// define the class in the current scope / global object
				this.foo = new Class();

				// define the class in a namespace
				var namespace = {
					foo: new Class()
				};

				// get the variable class name we need to use from any source into a variable...
				var dynamic = 'foo';

				// make the instances
				var instance1 = new this[dynamic]();
				var instance2 = new namespace[dynamic]();
				
				// use it on the global object
				console.log("instance1 is: " + nativeUtil.getClassNameOfInstance(instance1)); // foo

				// use it on the namespace object
				console.log("instance2 is: " + nativeUtil.getClassNameOfInstance(instance2, namespace)); // foo
			}
			
		});
		
		return DynamicClass;
});
