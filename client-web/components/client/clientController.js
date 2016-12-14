'use strict';

angular
    .module('getinline')
    .controller('clientController', clientController);

function clientController($scope) {
    var vm = this;

    vm.title = "Client";

    $scope.actions = [
        {
            name: 'Action 1',
            state: 'clients'
        },
        {
            name: 'Home',
            state: 'home'
        }
    ];

}