angular
	.module('weatherApp')
	.controller('mainCtrl', function($scope){
		$scope.theWeather = [
		{
			city: "Miami",
			wind: "Clear",
			degreeFar: 95,
			degreeCel: 35,
			degOrFar: true,
			iconTest: "wi-day-cloudy wi-fw"
		}
		
	];
	   
});

//will probabaly no longer need this controller once I get open api up and running