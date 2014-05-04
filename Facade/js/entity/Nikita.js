//js/entity/Nikita.js
define(
	['Movie'],
	function(Movie) {
		var Nikita = function() {
			Movie.apply(this);
			this.sName = 'Nikita, hard to kill!';
			this.nMinutes = 120;
			this.sDirector = 'Steven Spielberg';
			this.aActors = ['Brad Pitt'];
			this.sDescription = 'Bloody!';
		};
		
		return Nikita;
	}
);