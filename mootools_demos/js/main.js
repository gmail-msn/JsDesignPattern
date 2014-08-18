require.config({
	baseUrl: 'js',
    paths: {
        jquery: '../../js/libs/jquery-2.1.0.min',
		Utils: '../../js/utils',
        Moo: '../../js/libs/mootools-core-1.5.0-full-nocompat'
    }
});

 
require(['jquery', 'Utils', 'Moo'], 
	function($, Utils, Moo) {
		new Utils();
		//var oChainable = new Chainable();
		// This must return "21"
		//console.log(oChainable.add(3).add(4).multiply(3).sub(3).toString());
		
		var myString = 'hello';
		var result = typeOf(myString); // returns "string"
		var propertyList = [{
					name : "lv_record",
					key : "addList",
					value : "params"
				}];
		console.log(String.from(JSON.stringify(propertyList)));
		console.log(String.from("hello-world-i-am-teddy").camelCase());
		
		var myString = '{subject} is {property_1} and {property_2}.';
		var myObject = {subject: 'Jack Bauer', property_1: 'our lord', property_2: 'saviour'};
		myString.substitute(myObject); // returns Jack Bauer is our lord and saviour
		console.log(myString.substitute(myObject));
		
		Array.each(['Sun', 'Mon', 'Tue'], function(day, index){
			console.log('name:' + day + ', index: ' + index);
		}); // alerts 'name: Sun, index: 0', 'name: Mon, index: 1', etc.
		
		['apple', 'banana', 'lemon'].each(function(item, index){
			console.log(index + " = " + item);
		}); //第二个参数可选，在这里没有使用
		
		var foo = [4, 8, 15, 16, 23, 42];
		var bar = foo.invoke('limit', 10, 30);  //bar is now [10, 10, 15, 16, 23, 30]
		console.log(String.from(bar));
		//console.log(bar);
		
		var areAllBigEnough = [10, 4, 25, 100].every(function(item, index){
			return item > 20;
		}); // areAllBigEnough = false
		console.log(areAllBigEnough);
		
		var biggerThanTwenty = [10, 3, 25, 100].filter(function(item, index){
			return item > 20;
		}); // biggerThanTwenty = [25, 100]
		
		console.log(String.from(biggerThanTwenty));
		
		var animals = ['Cow', 'Pig', 'Dog', 'Cat'];
		var sounds = ['Moo', 'Oink', 'Woof', 'Miao'];
		console.log(JSON.stringify(sounds.associate(animals)));
		// returns {'Cow': 'Moo', 'Pig': 'Oink', 'Dog': 'Woof', 'Cat': 'Miao'}
		
		//var el = document.createElement('div');
		var arr2 = [100, 'Hello', {foo: 'bar'}, /*el,*/ true];
		/*var resultLink = arr2.link({
			myNumber: Type.isNumber,
			myElement: Type.isElement,
			myObject: Type.isObject,
			myString: Type.isString,
			myBoolean: function(obj){ 
				console.log(obj);
				return obj != null; 
			}
		});
		// returns {myNumber: 100, myElement: el, myObject: {foo: 'bar'}, myString: 'Hello', myBoolean: false}
		console.log(resultLink);*/
		
		function say(infoMessage, errorMessage){
			alert([errorMessage, infoMessage, 'There was no message supplied.'].pick());
		 
			//or more MooTools 1.2 style using Generics
			Array.pick([errorMessage, infoMessage, 'There was no message supplied.']);
		 
		}
		//say(); // alerts 'There was no message supplied.'
		//say('This is an info message.'); // alerts 'This is an info message.'
		//say('This message will be ignored.', 'This is the error message.'); // alerts 'This is the error message.'
		
		//console.log(String.uniqueID());
		var fn = Function.from(42);
		//console.log(fn());    // alerts '42'
		 
		var fn2 = Function.from(fn);
		console.log(fn2());   // alerts '42'
		
		//extends
		var myFunction = function(){};
		myFunction.extend('alert', function(text){
			alert(text);
		});
		//myFunction.alert('Hello!'); // alerts Hello!
		
		//implements
		var myFunction = function(){};
		myFunction.implement('alert', function(text){
			alert(text);
		});
		var myInstance = new myFunction();
		//myInstance.alert('Hello!'); // alerts Hello!
		
		//TODO:implement和extend的区别,extend只影响一个对象的实例,而implement作用到原型上,影响此对象下的所有实例.
		
		var myFunction = function(){
			var result = 'Passed: ';
			for (var i = 0, l = arguments.length; i < l; i++){
				result += (arguments[i] + ' ');
			}
			return result;
		}
		var myHello = myFunction.pass('hello');
		var myItems = myFunction.pass(['peach', 'apple', 'orange']);
		 
		// Later in the code, the functions can be executed:
		console.log(myHello()); // passes 'hello' to myFunction.
		console.log(myItems()); // passes the array of items to myFunction.
		
		//Delay exec
		var myFunction = function(){ alert('moo! Element id is: ' + this.id); };
 
		//wait 50 milliseconds, then call myFunction and bind myElement to it
		//myFunction.delay(50, myElement); // alerts: 'moo! Element id is: ... '
		 
		//an anonymous function which waits a second and then alerts
		//(function(){ alert('one second later...'); }).delay(5000);
		 
		//to stop the delay, clearTimeout can be used like so:
		//var timer = myFunction.delay(50);
		//clearTimeout(timer);
		
		// alerts 'The first day of the week is Sunday', 'The second day of the week is Monday', etc.:
		Object.each({first: 'Sunday', second: 'Monday', third: 'Tuesday'}, function(value, key){
			console.log('The ' + key + ' day of the week is ' + value);
		});
		
		var obj1 = {a: 0, b: 1};
		var obj2 = {c: 2, d: 3};
		var obj3 = {a: 4, d: 5};
		var merged = Object.merge(obj1, obj2, obj3); // returns {a: 4, b: 1, c: 2, d: 5}, (obj2, and obj3 are unaltered)
		 
		merged === obj1; // true, obj1 gets altered and returned as merged object
		console.log(JSON.stringify(merged) + " <---->obj:" + JSON.stringify(obj1));
		console.log("obj2:" + JSON.stringify(obj2));
		
		var nestedObj1 = {a: {b: 1, c: 1}};
		var nestedObj2 = {a: {b: 2}};
		var nested = Object.merge(nestedObj1, nestedObj2); // returns: {a: {b: 2, c: 1}}
		
		//Clone
		var obj1 = {a: 0, b: 1};
		var obj2 = Object.clone(obj1);
		 
		obj1.a = 42;
		console.log(obj1.a);  // alerts '42'
		console.log(obj2.a);  // alerts '0'
		
		var firstObj = {
			name: 'John',
			lastName: 'Doe'
		};
		var secondObj = {
			age: '20',
			sex: 'male',
			lastName: 'Dorian'
		};
		Object.append(firstObj, secondObj);
		console.log(JSON.stringify(firstObj));
		//firstObj is now: {name: 'John', lastName: 'Dorian', age: '20', sex: 'male'};
		
		var object = {
			a: 'one',
			b: 'two',
			c: 'three'
		};
		var subseted = Object.subset(object, ['a', 'c', 'd']); // returns {a: 'one', c: 'three'}
		console.log(JSON.stringify(subseted));
		
		var myObject = {a: 1, b: 2, c: 3};
		var timesTwo = Object.map(myObject, function(value, key){
			return value * 2;
		}); // timesTwo now holds an object containing: {a: 2, b: 4, c: 6};
		console.log("myObject:" + JSON.stringify(myObject));
		console.log(JSON.stringify(timesTwo));
		
		var myObject = {a: 10, b: 20, c: 30, d: 40};
		var biggerThanTwenty = Object.filter(myObject, function(value, key){
			return value > 20;
		}); // biggerThanTwenty now holds an object containing: {c: 30}
		console.log(JSON.stringify(biggerThanTwenty));
		
		var myObject = {a: 10, b: 4, c: 25, d: 100};
		var areAllBigEnough = Object.every(myObject, function(value, key){
			return value > 20;
		}); // areAllBigEnough = false
		
		var myObject = {a: 10, b: 4, c: 25, d: 100};
		var areAllBigEnough = Object.every(myObject, function(value, key){
			return value > 20;
		}); // areAllBigEnough = false
		console.log("myObject--areAllBigEnough:" + areAllBigEnough);
		
		var myObject = {a: 10, b: 4, c: 25, d: 100};
		var areAnyBigEnough = Object.some(myObject, function(value, key){
			return value > 20;
		}); //isAnyBigEnough = true
		console.log("isAnyBigEnough:" + areAnyBigEnough);
		
		var myObject = {a: 10, b: 4, c: 25, d: 100};
		console.log("keys:" + Object.keys(myObject));
		console.log("keys type:" + typeOf(Object.keys(myObject)));
		
		var myObject = {a: 10, b: 4, c: 25, d: 100};
		console.log("keys:" + Object.values(myObject));
		console.log("values type:" + typeOf(Object.keys(myObject)));
		
		var myObject = {
			name: 'John',
			lastName: 'Doe'
		};
		var objLength = Object.getLength(myObject); // returns 2
		console.log(objLength);
		
		var myObject = {a: 'one', b: 'two', c: 3};
		var keyTwo = Object.keyOf(myObject, 'two'); // returns 'b'
		var key3 = Object.keyOf(myObject, 3); // returns 'c'
		var keyFour = Object.keyOf(myObject, 'four'); // returns false
		console.log("keyTwo:" + keyTwo + " key3:" + key3 + " keyFour:" + keyFour);
		
		var myObject = {a: 'one', b: 'two', c: 'three'};
		var containsOne = Object.contains(myObject, 'one'); // returns true
		var containsFour = Object.contains(myObject, 'four'); // returns false
		console.log("containsOne:" + containsOne + " containsFour:" + containsFour);
		
		var queryString1 = Object.toQueryString({apple: 'red', lemon: 'yellow'}); // returns 'apple=red&lemon=yellow'
		var queryString2 = Object.toQueryString({apple: 'red', lemon: 'yellow'}, 'fruits'); // returns 'fruits[apple]=red&fruits[lemon]=yellow'
		console.log("queryString1:" + queryString1);
		console.log(" queryString2:" + queryString2);
		
		//TODO:Class示例:
		var Cat = new Class({
			initialize: function(name){
				this.sName = name;
			}
		});
		var myCat = new Cat('Micia');
		console.log(myCat.sName); // alerts 'Micia'
		 
		var Cow = new Class({
			initialize: function(){
				console.log('moooo');
			}
		});
		new Cow();
		
		//TODO:Extends示例:
		var Animal = new Class({
			initialize: function(age){
				this.age = age;
			}
		});
		var Cat = new Class({
			Extends: Animal,
			initialize: function(name, age){
				this.parent(age); // calls initalize method of Animal class
				this.name = name;
			}
		});
		var myCat = new Cat('Micia', 20);
		console.log("My cat's name:" + myCat.name); // alerts 'Micia'.
		console.log("My cat's age:" + myCat.age); // alerts 20.
		
		//TODO:Implements示例:
		var Animal = new Class({
			initialize: function(age){
				this.age = age;
			}
		});
		var Cat = new Class({
			Implements: Animal,
			setName: function(name){
				this.name = name
			}
		});
		var myAnimal = new Cat(20);
		myAnimal.setName('Micia');
		console.log(myAnimal.name); // alerts 'Micia'.
		console.log(myAnimal.age);
		
		//TODO:Class Method: implement
		var Animal = new Class({
			initialize: function(age){
				this.age = age;
			}
		});
		Animal.implement({
			setName: function(name){
				this.name = name;
			}
		});
		var myAnimal = new Animal(20);
		myAnimal.setName('Micia');
		console.log(myAnimal.name); // alerts 'Micia'
		
		//TODO:Chain Method: constructor
		var Todo = new Class({
			Implements: Chain,
			initialize: function(){
				this.chain.apply(this, arguments);
			}
		});
	 
		var myTodoList = new Todo(
			function(){ console.log('get groceries'); },
			function(){ console.log('go workout'); },
			function(){ console.log('code mootools documentation until eyes close involuntarily'); },
			function(){ console.log('sleep'); }
		);
		
		/*
		//TODO:Chain Method: chain
		//Fx.Tween has already implemented the Chain class because of inheritance of the Fx class.
		var myFx = new Fx.Tween('myElement', {property: 'opacity'});
		myFx.start(1, 0).chain(
			//Notice that "this" refers to the calling object (in this case, the myFx object).
			function(){ this.start(0,1); },
			function(){ this.start(1,0); },
			function(){ this.start(0,1); }
		); //Will fade the Element out and in twice.
		*/
		
		//TODO:Chain Method: callChain		
		var myChain = new Chain();
		myChain.chain(
			function(){ console.log('do dishes'); },
			function(){ console.log('put away clean dishes'); }
		);
		myChain.callChain(); // alerts 'do dishes'.
		myChain.callChain(); // alerts 'put away clean dishes'
		
	}
);