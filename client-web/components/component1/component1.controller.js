'use strict';

angular
    .module('nodestarter')
    .controller('component1controller', component1controller);

function component1controller($scope, component1service) {
    var vm = this;

    vm.title = "Component 1";
    $scope.$parent.title = vm.title;

    vm.items = [];
    vm.getItems = getItems;

    function getItems() {
        function success(res) {
            console.log(res.data);
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
            name: 'Components Mng',
            state: 'compMng'
        },
        {
            name: 'Home',
            state: 'home'
        }
    ];

}