app.controller('clipboardController', ['$scope', '$resource',
	function($scope, $resource){		
		$scope.data = 'Test';
		$scope.getClipData = function() {

		}

		$scope.saveClipData = function() {
			$scope.data = 'New Data';
		}
	}
]);