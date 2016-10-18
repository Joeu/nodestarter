angular.module('nodestarter').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: '../components/home/home.html',
        controller: 'homeController'
    })

});