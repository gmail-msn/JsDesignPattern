define(['jquery', 'Moo'],
	function($, Moo) {
		var Utils = new Class({
			initialize : function() {
			
			}
			
		});
		Utils.getClassNameOfInstance = function(mootoolsClassInstance, context) {
			// query the context (this or custom object) for the instance we are working with
			return Object.keyOf(context || this, mootoolsClassInstance.constructor);
		};
		return Utils;
});
