    /**
 * Created by deniscapp on 2/8/16.
 */


    var jennyApp = angular.module('jennyApp',['ui.router']);

    jennyApp.config(['$locationProvider','$stateProvider','$urlRouterProvider',
        function($locationProvider,$stateProvider,$urlRouterProvider){

            $urlRouterProvider.otherwise('/about');

            $stateProvider
                .state('shortmovies',{
                    url: '/shortmovies',
                    templateUrl: 'shortmovies.html'
                })
                .state('games',{
                    url: '/games',
                    templateUrl: 'games.html'
                })
                .state('photos',{
                    url: '/photos',
                    templateUrl: 'photos.html'
                })
                .state('others',{
                    url: '/others',
                    templateUrl: 'others.html'
                })
                .state('about',{
                    url: '/about',
                    templateUrl: 'about.html'
                });

        //$routeProvider.
        //    when('/',{
        //        templateUrl: 'about.html',
        //        controller: 'mainController'
        //    }).
        //
        //    when('/shortmovies',{
        //        templateUrl: 'shortmovies.html',
        //        controller: 'mainController'
        //    }).
        //
        //    when('/games',{
        //        templateUrl: 'games.html',
        //        controller: 'mainController'
        //    }).
        //
        //    when('/photos',{
        //        templateUrl: 'photos.html',
        //        controller: 'mainController'
        //    }).
        //
        //    when('/others',{
        //        templateUrl: 'others.html',
        //        controller: 'mainController'
        //    });

            //$locationProvider.html5Mode(true);

    }]);

    //jennyApp.run(function ($browser) {
    //    $browser.baseHref = function () { return "./" };
    //});

    jennyApp.controller('mainController',function($scope,$timeout){
        $scope.show = function(){

            $('#loader').fadeOut(500);
            $('#content').delay(500).fadeIn();


        };

        $scope.$on('$viewContentLoaded', function(){
            $('#loader').fadeOut(500);
            $('#content').delay(500).fadeIn();
        });
        //$timeout(function(){
        //    show();
        //}, 1000);

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
