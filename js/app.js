console.log("files connected");
const app = angular.module('portfolio', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/web-development', {
		templateUrl: './views/web-development.html'
	})
	.when('/reiki', {
		templateUrl: './views/reiki.html'
	})
	.when('/collectible-coins', {
		templateUrl: './views/collectible-coins.html'
	})
	.otherwise({
		templateUrl: './views/home.html'
	})
})