angular.module('nodestarter').controller('homeController', function ($scope, $timeout, $mdSidenav) {
    $scope.title = "Node Starter";

    $scope.title = "NodeStarter";

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        }
    };

    $scope.actions = [
        {
            name: 'About',
            state: 'home.about'
        }
    ];

});