(function(){
	/*<home /> component*/
	app.component("scrumboard", {
		templateUrl : "./views/scrumboard/scrumboard.html",
		bindings: {},
		transclude: false,
		controllerAs : "mv",
		controller : ["$scope", app.controllers.scrumboard]
	});
}());