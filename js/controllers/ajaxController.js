angular
	.module('weatherApp')
	.controller('AjaxCtrl', function($scope, $http) {
		
		// if browser supports geolocation
		if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function success(position) {
					
					$scope.lat = position.coords.latitude;
					$scope.lon = position.coords.longitude;
					
					// Test API using local json copy	
					$http.get("location.json").then(function (response) {
						$scope.locCast = response.data;
						$scope.cvrtToCel = Math.round( ($scope.locCast.main.temp -32) * 5 / 9); //converts temp data to Celsius
			  		});	//get request
					
					/*
					// Gets Open Weather API URL and inserts local latitude and longitude into string 	
					$http.get("http://api.openweathermap.org/data/2.5/weather?lat="+$scope.lat+"&lon="+$scope.lon+"&units=imperial&APPID=1583b128294c33f21c59ec26bb3cb74d").then(function (response) {
						$scope.locCast = response.data;
			  		});	//get request
			  		*/
						
				}); //nav geo function
		}; // if statment
  });
	
	
