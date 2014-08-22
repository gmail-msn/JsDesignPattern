//js/app/ProtectPrivate
define(
	['Moo'],
	function(Moo) {
		var ProtectPrivate = new Class({
			Implements: [Options,Events],
			options: {
				startHealth: 10,
				name: "Bruce",
				surname: "Lee"
			},
			initialize: function(options) {
				this.setOptions(options);
				this.health = this.options.startHealth;
				this.alive = true;
			},
			heal: function(points) {
				if (!this.alive)
					return;
				
				this.health += points || 1;
			},
			hurt: function(points) {
				if (!this.alive)
					return;
				
				this.health -= points || 1;
				if (this.health <= 0)
					this.die();
			},
			die: function() {
				this.alive = false;
				this.fireEvent("death", this); // let everyone know
			}.protect() // protected method
		
		});
		
		
		ProtectPrivate.show = function() {
			//TODO:test protected method
			var bruce = new ProtectPrivate({
				onDeath: function() {
					// default handler when death occurs
					console.log(this.options.name + " " + this.options.surname + " has passed away.");
				}
			});

			bruce.hurt(5);
			try {
				// not allowed to kill ninja directly, need to hurt it instead
				bruce.die();
			} catch(e) {
				console.log("the ninja lives!");
				console.log(e);
			}

			// now hurt it more so it dies anyway
			bruce.hurt(5);
		}
		return ProtectPrivate;
	}
);