angular.module('nodestarter').controller('homeController', function ($scope, $timeout, $mdSidenav) {

    $scope.title = "Node Starter";

    $scope.actions = [
        {
            name: 'Component1',
            state: 'comp1'
        },
        {
            name: 'Component2',
            state: 'comp2'
        }
    ];

});