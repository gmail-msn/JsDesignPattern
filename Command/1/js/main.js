require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
		Command: './app/Command',
		Light: './app/Light',
		LightOnCommand: './app/LightOnCommand',
		SimpleRemoteControl: './app/SimpleRemoteControl'
	}
});

require(
	['Light', 'SimpleRemoteControl', 'LightOnCommand', 'Utils'],
	function(Light, SimpleRemoteControl, LightOnCommand, Utils) {
		new Utils();
		var oSimpleRemote = new SimpleRemoteControl();
		var oLight = new Light();
		var oLightCommand = new LightOnCommand(oLight);

		oSimpleRemote.setCommand(oLightCommand);
		oSimpleRemote.buttonWasPressed();
		console.log("Clicking Light Off");
		oSimpleRemote.buttonUndoWasPressed();
	}
);