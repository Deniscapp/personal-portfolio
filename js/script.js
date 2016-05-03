    /**
 * Created by deniscapp on 2/8/16.
 */


    var jennyApp = angular.module('jennyApp',['ui.router']);

    jennyApp.config(['$locationProvider','$stateProvider','$urlRouterProvider',
        function($locationProvider,$stateProvider,$urlRouterProvider){

            $urlRouterProvider.otherwise('about');

            $stateProvider
                .state('shortmovies',{
                    url: '/shortmovies',
                    views:{
                        'mainContent':{
                            templateUrl: 'shortmovies.html'
                        },
                        'sideContent':{
                            templateUrl: 'navside.html'
                        },
                        'footerContent':{
                            templateUrl: 'footer.html'
                        }
                    }
                })
                .state('games',{
                    url: '/games',
                    views:{
                        'mainContent':{
                            templateUrl: 'games.html'
                        },
                        'sideContent':{
                            templateUrl: 'navside.html'
                        },
                        'footerContent':{
                            templateUrl: 'footer.html'
                        }
                    }
                })
                .state('photos',{
                    url: '/photos',
                    views:{
                        'mainContent':{
                            templateUrl: 'photos.html'
                        },
                        'sideContent':{
                            templateUrl: 'navside.html'
                        },
                        'footerContent':{
                            templateUrl: 'footer.html'
                        }
                    }
                })
                .state('others',{
                    url: '/others',
                    views:{
                        'mainContent':{
                            templateUrl: 'others.html'
                        },
                        'sideContent':{
                            templateUrl: 'navside.html'
                        },
                        'footerContent':{
                            templateUrl: 'footer.html'
                        }
                    }
                })
                .state('about',{
                    url: '/about',
                    views:{
                        'mainContent':{
                            templateUrl: 'about.html'
                        },
                        'sideContent':{
                            templateUrl: 'navside.html'
                        },
                        'footerContent':{
                            templateUrl: 'footer.html'
                        }
                    }
                })
                .state('home',{
                    url: '/home',
                    views: {
                        'homeContent': {
                            templateUrl: 'home.html'
                        }
                    }

                })
                .state('/',{
                    url: '',
                    views: {
                        'homeContent': {
                            templateUrl: 'home.html',
                            controller: 'homeController'
                        }
                    }

                });


            //$locationProvider.html5Mode(true);

    }]);

    //jennyApp.run(function ($browser) {
    //    $browser.baseHref = function () { return "./" };
    //});

    jennyApp.controller('sideNavController',function($scope,$timeout){
        $(".button-collapse").sideNav({
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true
        })

    });

    jennyApp.controller('mainController',function($scope,$timeout){



    });

     jennyApp.controller('homeController',function($scope,$timeout){

         $scope.transact = function () {
             
         }

        });
