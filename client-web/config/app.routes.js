angular.module('getinline').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: '../components/home/home.html',
        controller: 'homeController'
    })

    .state('establishments', {
        url: '/',
        templateUrl: '../components/establishment/establishment.html',
        controller: 'establishmentController as estCtrl'
    })

    .state('clients', {
        url: '/',
        templateUrl: '../components/client/client.html',
        controller: 'clientController as cliCtrl'
    })


});