define(['jquery'],
	function($) {
		var instance;
		var Singleton = {
			
			/*toStringAB : function () { 
					alert("toString");
					return "[object Singleton]"; 
			},*/
			
			getInstance : function() {
				alert("get Instance");
				if (!instance) {
					instance = new Singleton;
				}
				return instance;	
			}
		}
//		$.extend($.Singleton.prototype, { toString : 
//				function () {
//					return "[object Singleton]"; 
//				}
//			});
		return Singleton;
	}
);

/*function Singleton(instance)
{
	if(!Singleton.getInstance)
	{
		Singleton.getInstance = function()
		{
			return instance;
		};
		instance = new Singleton;
	}
	this.toString = function()
	{
		return "[object Singleton]";
	};
}(new Singleton);*/
