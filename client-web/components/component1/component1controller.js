'use strict';

angular
    .module('nodestarter')
    .controller('component1controller', component1controller);

function component1controller($scope, component1service) {
    var vm = this;

    vm.title = "Component 1";
    vm.items = [];
    vm.getItems = getItems;

    function getItems() {
        function success(res) {
            vm.items = res.data;
        }

        function error(err) {
            console.log(err);
        }

        component1service.getItems().then(success, error);
    }

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