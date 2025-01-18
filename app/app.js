var app = angular.module('BookApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'mainController'
        })
        


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });

});