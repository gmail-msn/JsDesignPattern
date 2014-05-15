define(['jquery'],
	function($) {
		
		var Singleton = new function Singleton() {
			this.instance = this;
			/*Singleton.getInstance = function() {
				return instance;
			}*/
			this.toString = function() {
				return "[object Singleton]";
			}
		 
			this.instanceMethod = function() {
				console.log( "instance method called!" );		
			}
		 
			Singleton.staticMethod = function() {
				console.log( "static method called!" );
			}
			return Singleton;
		};
		
		/* this function will throw an Uncaught TypeError: undefined is not a function Exception*/
		//Singleton.prototype.getInstance = function() {
		//	statements;
		//}
		Singleton.getInstance = function() {
			if (!this.instance) {
				new Singleton();
			}
		};

		return Singleton;
	}
);

/*
// constructor function
function MyClass () {
  var privateVariable; // private member only available within the constructor fn

  this.privilegedMethod = function () { // it can access private members
    //..
  };
}

// A 'static method', it's just like a normal function 
// it has no relation with any 'MyClass' object instance
MyClass.staticMethod = function () {};

MyClass.prototype.publicMethod = function () {
  // the 'this' keyword refers to the object instance
  // you can access only 'privileged' and 'public' members
};

var myObj = new MyClass(); // new object instance

myObj.publicMethod();
MyClass.staticMethod();
*/

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
