    /**
 * Created by deniscapp on 2/8/16.
 */


    var jennyApp = angular.module('jennyApp',['ngRoute']);

    jennyApp.config(['$routeProvider','$locationProvider',
        function($routeProvider,$locationProvider){

        $routeProvider.
            when('/',{
                templateUrl: 'about.html',
                controller: 'mainController'
            }).

            when('/shortmovies',{
                templateUrl: 'shortmovies.html',
                controller: 'mainController'
            }).

            when('/games',{
                templateUrl: 'games.html',
                controller: 'mainController'
            }).

            when('/photos',{
                templateUrl: 'photos.html',
                controller: 'mainController'
            }).

            when('/others',{
                templateUrl: 'others.html',
                controller: 'mainController'
            });

            $locationProvider.html5Mode(true);

    }]);

    //jennyApp.run(function ($browser) {
    //    $browser.baseHref = function () { return "./" };
    //});

    jennyApp.controller('mainController',function($scope,$timeout){
        var show = function(){

            $('#loader').fadeOut(500);
            $('#content').delay(500).fadeIn();


        };

        $timeout(function(){
            show();
        }, 1000);

    });

     jennyApp.controller('photosController',function($scope,$timeout){
         //  var show = function(){
         //
         //          $('#loader').fadeOut(500);
         //          $('#content').delay(500).fadeIn();
         //
         //
         //  };
         //
         //$timeout(function(){
         //    show();
         //}, 1000);

        });
