//js/app/TestEvent
define(
	['Moo'],
	function(Moo) {
		var TestEvent = new Class({
			initialize : function() {
				//TODO: test Element
				var foo = new Element('div'),
					uid = foo.uniqueNumber;
					
				foo.store('foo', 'foo only');
					
				var bar = new Element('div');

				//console.log(bar.retrieve('foo')); // null

				bar.uniqueNumber = uid; // force overwrite of uid to the other el

				//console.log(bar.retrieve('foo')); // foo only - OH NOES

				//console.log(Object.keys(foo)); // ["uniqueNumber"] - oh dear. enumerable!
				
				
				//TODO:Slick
				Slick.definePseudo('data', function(value){
					// wildcard data-startswith search
					var outer = this.outerHTML || new XMLSerializer().serializeToString(this);
					return outer.test('data-' + value);
				});

				//console.log($$("div:data(media-)")); // return all divs with data-media-* attribute
				
				//Test event
				var TestEvent = new Class({
		   
					Implements: [Events],
					
					initialize: function() {
						this.foo = 1;
						this.fireEvent.delay(1000, this, ['event', [this.foo, 'moar']]);
						// won't actually fire until time is due.
						this.addEvent('event', function() {
							console.log(arguments, this);
						});
						
						this.foo = 2;
					}
					
				});

				//new TestEvent();
			}
		});
		
		return TestEvent;
	}
);