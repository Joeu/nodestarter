'use strict';

angular
    .module('nodestarter')
    .controller('component2controller', component2controller);

function component2controller($scope) {
    var vm = this;

    vm.title = "Component 2";

    $scope.actions = [
        {
            name: 'Component 1',
            state: 'comp1'
        },
        {
            name: 'Home',
            state: 'home'
        }
    ];

}