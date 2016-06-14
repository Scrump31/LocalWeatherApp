angular
	.module('weatherApp')
	.controller('ajaxCtrl', function($scope, $http) {
		
		// if browser supports geolocation
		if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function success(position) {
					
					$scope.lat = position.coords.latitude;
					$scope.lon = position.coords.longitude;
					/*
					var latitude  = position.coords.latitude;
					var longitude = position.coords.longitude;
					
				
					$scope.$apply(function() {
						$scope.lat = lattitude;
						$scope.lon = longitude;
					*/	
					
					// Gets Open Weather API URL and inserts local latitude and longitude into string 	
					$http.get("http://api.openweathermap.org/data/2.5/weather?lat="+$scope.lat+"&lon="+$scope.lon+"&APPID=1583b128294c33f21c59ec26bb3cb74d").then(function (response) {
						$scope.locCast = response.data;
			  		});	//get request
						
				}); //nav geo function
		}; // if statment
  });
	
	
