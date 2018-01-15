(function () {
	var app = angular.module('githubViewer');

	app.controller('UserController', function ($scope, github, $routeParams){

		var error = function (reason){
			$scope.error = "Couldn't fetch the user";
		};

		var userInfo = function (data){
			$scope.user = data;
			github.getRepos($scope.user).then(onRepos, error);
		};

		var onRepos = function (data){
			$scope.repos = data;
		};

		$scope.username = $routeParams.username;
		$scope.repoSortOrder = "-stargazers_count";
		github.getUser($scope.username).then(userInfo, error);
	});

}());