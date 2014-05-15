define(
	function() {
		var Module = (function() {
			return {
				container: document.getElementById("test"),
				init: function() {
					this.container.innerHTML = 'Test module';
				},
				destroy: function() {
					this.container.innerHTML = '';
				}
			};
		});
		
		return Module;
	}
);