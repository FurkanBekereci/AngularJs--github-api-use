(function(){
    var app = angular.module('githubViewer');
    app.controller('RepoController',function($scope, $routeParams, github){

        
        var onRepo = function(data){
            $scope.repo = data;
        };

        var onError = function(reason){
            $scope.error = reason;
        };

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoList(username,reponame)
                .then(onRepo,onError);

    });
}());