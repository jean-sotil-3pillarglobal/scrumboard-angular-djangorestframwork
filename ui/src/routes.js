var app = angular.module('myApp', ['ngRoute']);

(function(){
	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	  $routeProvider.
	  	when("/", {
	  		templateUrl : "../views/home/home.html"
	  	}).
	  	when("/home", {
	  		templateUrl : "../views/home/home.html"
	  	}).
	  	when("/404", {
	  		templateUrl : "../views/home/404.html"
	  	}).
		otherwise({
			redirectTo: '/404'
		});
	  	$locationProvider.html5Mode(true);
	}]);
}());