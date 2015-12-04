//Modules represent angular apps
var app = angular.module('myApp',[]);
app.controller('detailsController',function($scope) {
	//$scope access the DOM elements - access variables
	$scope.fname = "Ephantus";
	$scope.lname = "Mwangi";
	$scope.course = "Mean Stack course";
	$scope.school = "The Dev school";
	$scope.grade = "B"

});
//Second controller
app.controller('carsController',function($scope) {
	//We create an array of objects assuming it was sourced from a server.
	$scope.cars = [
	{type: "Pickup", model: "TFS", brand: "ISUZU", year: 2004, cost: 4500, image: "images/isuzu.jpg"},
	{type: "SUV", model: "LANDCRUISER", brand: "TOYOTA", year: 2014, cost: 4900, image: "images/toyota.png"},
	{type: "Saloon", model: "Jetta", brand: "Volswagen", year: 2009, cost: 2500, image: "images/volkswagen.jpeg"},
	{type: "Lorry", model: "FUSO", brand: "MITSUBISHI", year: 2001, cost: 3500, image: "images/mitsubishi.png"},
	{type: "Sedan", model: "Legacy", brand: "SUBARU", year: 2012, cost: 3100, image: "images/subaru.jpeg"}

	];
	});
//here we consume a webservice/API
	app.controller('blogsController', function($scope, $http) {
		$http.get('http://jsonplaceholder.typicode.com/posts/1/comments').success(function(response) {
			//we get server response
			$scope.blogs=response;
		})
		.error(function(response) {
			console.log(response);

		});
	}); //end
