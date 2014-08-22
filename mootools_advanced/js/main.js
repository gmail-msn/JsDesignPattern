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
		ImplementDemo: './app/ImplementDemo'
    }
});

 
require(['jquery', 'Utils', 'DynamicClass', 'GetterSetter', 'TestEvent', 'TestImplementExtends', 'ProtectPrivate', 'ImplementDemo'], 
	function($, Utils, DynamicClass, GetterSetter, TestEvent, TestImplementExtends, ProtectPrivate, ImplementDemo) {
		new Utils();		
		
		new DynamicClass().display();
		new GetterSetter().showDemo();
		new TestEvent();
		new TestImplementExtends();
		
		ProtectPrivate.show();
		new ImplementDemo("a1", "a2").myCustomMethod();
	}
);