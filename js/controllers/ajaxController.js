angular.module('weatherApp', [])
	.controller('AjaxCtrl',function($scope, $http) {

		// Api to get lattitude and longitude
		$http.get("http://ip-api.com/json").then(function(georesponse) {
					$scope.lat = georesponse.data.lat;
					$scope.lon = georesponse.data.lon;

			// Gets Open Weather API URL and inserts local latitude and longitude into string
			$http.get("http://api.openweathermap.org/data/2.5/weather?lat="+$scope.lat+"&lon="+$scope.lon+"&units=imperial&APPID=1583b128294c33f21c59ec26bb3cb74d").then(function (response) {
				$scope.locCast = response.data;
				console.log($scope.locCast);
				$scope.cvrtToCel = Math.round( ($scope.locCast.main.temp -32) * 5 / 9); //converts temp data to Celsius
				$scope.tempFarInt = Math.round($scope.locCast.main.temp); //converts fahrenheit temperature to integer

				//Displays wi-day- or wi-night- based on current hour of day
	      $scope.today = new Date();
	      $scope.hour = $scope.today.getHours();
	      if ($scope.hour > 6 && $scope.hour < 20) {
	        $scope.dayOrNite = "wi-owm-day-";
	      } else {
	        $scope.dayOrNite ="wi-owm-night-";
	        }

					//Displays wi-day-clear, wi-day-rain, etc based on conditions
		      switch ($scope.locCast.weather[0].main) {
		        case "Clear":
		          $scope.condition = "800";
		          break;
		        case "Thunderstorm":
		          $scope.condition = "200";
		          break;
		        case "Clouds":
		          $scope.condition = "804";
		          break;
		        case "Drizzle":
		          $scope.condition = "300";
		          break;
		        case "Rain":
		          $scope.condition = "310";
		          break;
		        case "Snow":
		          $scope.condition = "903";
		          break;
		        default:
		          $scope.condition = " ";
		      }
			}, function errorCallback(response) {
			   $scope.noData = statusText;
			 });

		});// lat and lon

	});// controller
