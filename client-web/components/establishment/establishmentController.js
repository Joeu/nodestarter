'use strict';

angular
    .module('getinline')
    .controller('establishmentController', establishmentController);

function establishmentController($scope) {
    var vm = this;

    vm.title = "Establishment";

    $scope.actions = [
        {
            name: 'Action 1',
            state: 'establishments'
        },
        {
            name: 'Home',
            state: 'home'
        }
    ];

}