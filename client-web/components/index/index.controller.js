angular.module('nodestarter').controller('indexController', function ($scope, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

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