require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../js/libs/jquery-2.1.0.min',
		Utils: '../../js/utils',
		CurrentConditionsDisplay: './app/CurrentConditionsDisplay',
		Display: './app/Display',
		Observer: './app/Observer',
		Subject: './app/Subject',
		WeatherData: './app/WeatherData'
	}
});

require(
	['WeatherData', 'Utils', 'CurrentConditionsDisplay'],
	function(WeatherData, Utils, CurrentConditionsDisplay) {
		new Utils();
		var oWeatherData = new WeatherData();
		var oCurrentConditionsDisplay = new CurrentConditionsDisplay(oWeatherData);
		oWeatherData.setMeasurements(80, 65, 30.4);
	}
);