require.config({
	baseUrl: 'js',
	paths: {
		jquery: '../../../js/libs/jquery-2.1.0.min',
		Utils: '../../../js/utils',
		ListView: './ListView',
		TodoModel: './app/TodoModel',
		ListController: './ListController',
		FakeAjaxCall: './app/FakeAjaxCall',
		
	},
	shim: {
		ListView: {
			exports: 'ListView'
		}
	}
});

require(
	['Utils', 'TodoModel', 'ListView', 'ListController'],
	function(Utils, TodoModel, ListView, ListController) {
		new Utils();
		var oListView = new ListView(document.getElementById("results"));
		var oTodoModel = new TodoModel();
		var oListController = new ListController(oListView, oTodoModel);

		oListController.init();
	}
);