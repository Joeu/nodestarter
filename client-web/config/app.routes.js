angular.module('nodestarter').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: '../components/home/home.html',
            controller: 'homeController'
        })

        .state('compMng', {
            url: '/components',
            templateUrl: '../components/componentsManager/componentsMng.html',
            controller: 'componentMngController as cMngCtrl'
        })

        .state('comp1', {
            url: '/component1',
            templateUrl: '../components/component1/component1.html',
            controller: 'component1controller as c1Ctrl'
        })

        .state('comp1.createItem', {
            url: '/create',
            templateUrl: '../components/component1/component1.create.html',
            controller: 'component1controller as c1Ctrl'
        })

        .state('comp2', {
            url: '/component2',
            templateUrl: '../components/component2/component2.html',
            controller: 'component2controller as c2Ctrl'
        })

        .state('comp2.createItem', {
            url: '/create',
            templateUrl: '../components/component2/component2.create.html',
            controller: 'component1controller as c1Ctrl'
        })


});