angular
	.module('weatherApp')
	.controller('chgDegreeCtrl', function($scope){
		$scope.chgDegree = function(){
			//$('#testDiv').textContent = $('#currentDegree').val();
			//$('#testDiv').textContent = "change degree test";
			$scope.farDeg = document.getElementById('dInFar').textContent;
			$scope.celDeg = document.getElementById('dInCel').textContent;
			
			
			//<h2 id="currentDegree">95<span>&#8457</span></h2></p>
			
			//when button clicked, if span is "F" then convert to "C" and vise versa
			//Need a function to convert degrees 
		};

		
	});
		