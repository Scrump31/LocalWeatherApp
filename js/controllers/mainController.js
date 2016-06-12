angular
	.module('weatherApp')
	.controller('mainCtrl', function($scope){
		$scope.theWeather = [
		{
			city: "Fort Mill",
			wind: "Clear",
			degreeFar: 95,
			degreeCel: 35
		}
		
	];
	   
});