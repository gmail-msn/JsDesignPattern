require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../js/libs/jquery-2.1.0.min',
		Utils: '../../js/utils',
		HomeTheaterFacade: './HomeTheaterFacade',
		Movie: './entity/Movie',
		Nikita: './entity/Nikita',
		Amplifier: './elements/Amplifier',
		CdPlayer: './elements/CdPlayer',
		DvdPlayer: './elements/DvdPlayer',
		PopcornPopper: './elements/PopcornPopper',
		Projector: './elements/Projector',
		Screen: './elements/Screen',
		TheaterLights: './elements/TheaterLights',
		Tuner: './elements/Tuner'
	}
});

require(
	['Utils', 'HomeTheaterFacade', 'Amplifier', 'Tuner', 'DvdPlayer', 'CdPlayer', 'Projector', 'TheaterLights', 'Screen', 'PopcornPopper', 'Nikita'],
	function(Utils, HomeTheaterFacade, Amplifier, Tuner, DvdPlayer, CdPlayer, Projector, TheaterLights, Screen, PopcornPopper, Nikita) {
		new Utils();
		var oHomeTheaterFacade = new HomeTheaterFacade(new Amplifier(), new Tuner(), new DvdPlayer(), new CdPlayer(), new Projector(), new TheaterLights(), new Screen(), new PopcornPopper());
		oHomeTheaterFacade.watchMovie(new Nikita());
		oHomeTheaterFacade.endMovie();
	}
);