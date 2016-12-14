'use strict';

angular
    .module('nodestarter')
    .controller('component1controller', component1controller);

function component1controller($scope) {
    var vm = this;

    vm.title = "Component 1";

    $scope.actions = [
        {
            name: 'Component 2',
            state: 'comp2'
        },
        {
            name: 'Home',
            state: 'home'
        }
    ];

}