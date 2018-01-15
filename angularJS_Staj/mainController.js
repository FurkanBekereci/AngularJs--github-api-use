(function () {
	var app = angular.module('githubViewer');

	app.controller('mainController', function ($scope, $interval, $location) {

		var decrementCountdown = function () {
			$scope.countdown -= 1;
			if ($scope.countdown < 1) $scope.search($scope.username);
		};

		var countDownInterval = null;
		var startCountdown = function () {
			countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
		};

		$scope.doSmthng = function (repo) {
			repo.name = "Hello Angular";
			repo.stargazers_count = "10";
			repo.language = "JAVASCRIPT";
		};

		$scope.search = function (username) {
			if (countDownInterval) {
				$interval.cancel(countDownInterval);
				$scope.countdown = null;
			}
			$location.path("/users/" + username);
		};

		$scope.username = "Angular";
		$scope.countdown = 10;
		startCountdown();
	});
}());

