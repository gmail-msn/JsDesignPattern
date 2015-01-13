require.config({
	baseUrl: 'js',
    paths: {
        jquery: '../../js/libs/jquery-2.1.0.min',
		Utils: '../../js/utils',
        Moo: '../../js/libs/mootools-core-1.5.0-full-nocompat',
		nativeUtil: './app/Utils',
		DynamicClass: './app/DynamicClass',
		GetterSetter: './app/GetterSetter',
		TestEvent: './app/TestEvent',
		TestImplementExtends: './app/TestImplementExtends',
		ProtectPrivate: './app/ProtectPrivate',
		ThisSelfDemo: './app/ThisSelfDemo',
		ImplementDemo: './app/ImplementDemo'
    }
});

 
require(['jquery', 'Utils', 'DynamicClass', 'GetterSetter', 'TestEvent', 'TestImplementExtends', 'ProtectPrivate', 'ImplementDemo', 'ThisSelfDemo'], 
	function($, Utils, DynamicClass, GetterSetter, TestEvent, TestImplementExtends, ProtectPrivate, ImplementDemo, ThisSelfDemo) {
		new Utils();		
		
		new DynamicClass().display();
		new GetterSetter().showDemo();
		new TestEvent();
		new TestImplementExtends();
		
		ProtectPrivate.show();
		new ImplementDemo("a1", "a2").myCustomMethod();
		
		var thisSelf = new ThisSelfDemo();
		thisSelf.myFn();
		
		var ID = function () {
		  // Math.random should be unique because of its seeding algorithm.
		  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
		  // after the decimal.
		  return '_' + Math.random().toString(36)/*.substr(2, 9)*/;
		};
		console.log("ID:" + ID());
		console.log("ID:" + ID());
		
		console.error('1');
		console.info('2');
		console.log('3');
		console.warn('4');
				
	}
);