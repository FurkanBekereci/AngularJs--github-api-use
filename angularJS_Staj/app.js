(function (){
    var app = angular.module('githubViewer', ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "mainController"
            })
            .when("/users/:username", {
                templateUrl: "user.html",
                controller: "UserController"
            })
            .when("repo/:username/:reponame", {
                templateUrl: "repo.html",
                controller : "RepoController"
            })
            .otherwise({ redirectTo: "/main" });
    });
}());