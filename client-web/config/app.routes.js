angular.module('nodestarter').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: '../components/home/home.html',
        controller: 'homeController'
    })

    .state('comp1', {
        url: '/',
        templateUrl: '../components/component1/component1.html',
        controller: 'component1controller as c1Ctrl'
    })

    .state('comp2', {
        url: '/',
        templateUrl: '../components/component2/component2.html',
        controller: 'component2controller as c2Ctrl'
    })


});