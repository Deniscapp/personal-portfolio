    /**
 * Created by deniscapp on 2/8/16.
 */


    var jennyApp = angular.module('jennyApp',['ngRoute']);

    jennyApp.config(['$routeProvider',
        function($routeProvider){

        $routeProvider.
            when('/about',{
                templateUrl: '../pages/about.html',
                controller: 'mainController'
            }).

            when('/shortmovies',{
                templateUrl: '../pages/shortmovies.html',
                controller: 'mainController'
            }).

            when('/games',{
                templateUrl: '../pages/games.html',
                controller: 'mainController'
            }).

            when('/others',{
                templateUrl: '../pages/others.html',
                controller: 'mainController'
            });

    }]);


    jennyApp.controller('mainController',function($scope){

    });
