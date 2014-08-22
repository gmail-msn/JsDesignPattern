//js/app/TestImplementExtends
define(
	['Moo'],
	function(Moo) {
		var TestImplementExtends = new Class({
			initialize : function() {
				//TODO:test implement and extends
				var ninja = new Class({
					kill: function() {
						console.log("kill!");
					}
				})

				var human = new Class({
					initialize: function(){
						console.log("i r human!");
					}
				});

				human.implement(new ninja);

				var badass = new Class({
					Extends: human,
					initialize: function() {
						console.log("i r badass and.. ");
						this.parent();
						this.kill();
					}
				});

				new badass(); // this.kill works.
			
			}
		
		});
		
		return TestImplementExtends;
	}
);