require.config({
	baseUrl: 'js',
    paths: {
        jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
        PizzaStore: './app/PizzaStore',
        Pizza: './app/Pizza',
        ChicagoPizzaStore : './app/stores/ChicagoPizzaStore',
        NYPizzaStore : './app/stores/NYPizzaStore',
        ChicagoStyleCheesePizza : './app/pizzas/ChicagoStyleCheesePizza',
        NyStyleCheesePizza : './app/pizzas/NyStyleCheesePizza',
		NyStyleClamPizza : './app/pizzas/NyStyleClamPizza',
		NyStylePepperoniPizza : './app/pizzas/NyStylePepperoniPizza',
		NyStyleVeggiePizza : './app/pizzas/NyStyleVeggiePizza',
		ChicagoStyleVeggiePizza : './app/pizzas/ChicagoStyleVeggiePizza',
		ChicagoStyleClamPizza : './app/pizzas/ChicagoStyleClamPizza',
		ChicagoStylePepperoniPizza : './app/pizzas/ChicagoStylePepperoniPizza'
    }
});

 
require(['jquery', 'PizzaStore', 'Pizza', 'ChicagoPizzaStore', 'NYPizzaStore', 'Utils'], 
	function($, PizzaStore, Pizza, ChicagoPizzaStore, NYPizzaStore, Utils) {
    new Utils();
    var oPizzaStore = new NYPizzaStore();
	oPizzaStore.orderPizza("cheese");
	
	var chicagoPizzaStore = new ChicagoPizzaStore();
	chicagoPizzaStore.orderPizza("pepperoni");
});