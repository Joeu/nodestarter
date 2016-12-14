angular.module('getinline').controller('homeController', function ($scope, $timeout, $mdSidenav) {
    $scope.title = "Node Starter";

    $scope.title = "NodeStarter";

    $scope.actions = [
        {
            name: 'Establishments',
            state: 'establishments'
        },
        {
            name: 'Clients',
            state: 'clients'
        }
    ];

});