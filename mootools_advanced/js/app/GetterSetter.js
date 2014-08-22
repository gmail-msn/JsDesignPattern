//js/app/GetterSetter
define(
	['Moo'],
	function(Moo) {
		var GetterSetter = new Class({
			initialize : function() {
				(function() {

					// private real setter functions, not on prototype, see note on .set
					var _set = function(key, value) {
						// needs to be bound the the instance. 
						if (!key || typeof value === undefined)
						   return this;
						
						// no change? return. better rely on _.js _.eq but this is crude and works for primitives.
						if (this._attributes[key] && this._attributes[key] === value)
						   return this;
						   
						if (value === null) {
							this._attributes.delete(key); // delete = null. 
						}
						else {
							this._attributes[key] = value;
						}
						// fire an event. 
						return this.fireEvent("change:" + key, value);
					}.overloadSetter();   
					
					this.Model = new Class({

						_attributes: {}, // initial private object,
						
						Implements: [Options, Events],
						
						initialize: function(data, options) {
							data && typeOf(data) === 'object' && this.set(data);
							this.setOptions(options);
						},

						set: function() {
							// call the real getter. we proxy this because we want 
							// a single event after all properties are updated
							_set.apply(this, arguments);
							this.fireEvent("change");
						},
				   
						get: function(key) {
							// and the overload getter
							return (key && typeof this._attributes[key] !== undefined)
								? this._attributes[key]
								: null;
						}.overloadGetter()

					});



				})();
			}, 
			
			showDemo : function() {
				// now make an abstraction of your Model class for users
				var User = new Class({
					
					Extends: Model,
					
					_attributes: {
						name: "Please enter your name",
						email: "Enter your email address"
					}
					
				});

				// initialise your User Model with default data and set some property change events
				var user = new User(null, {
					"onChange:email": function(value) {
						// can dispatch to controller/view the change
						console.log("new email now is", value);
					},
					"onChange:name": function(value) {
						console.log("new name now is", value);
					},
					onChange: function() {
						console.log("data has changed!");
					}
				});

				// let's test this. initial set via single value set:
				user.set("email", "dimitar@securemail.com");

				// now let's try multiple properties at the same time:
				user.set({
					"email": "dimitar@securemail.com",
					"name": "coda"
				});

				// get the name
				console.log(user.get("name")); // coda;

				// get multiple properties in a single object
				console.log(user.get(["name","email"])); 
				// Object { name="coda",  email="dimitar@securemail.com"}
			}
			
		});
		
		return GetterSetter;
	}
);