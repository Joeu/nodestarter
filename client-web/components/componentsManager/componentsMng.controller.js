'use strict';

angular
    .module('nodestarter')
    .controller('componentMngController', componentMngController);

function componentMngController($scope, utilsService) {
    var vm = this;

    vm.title = "Components Manager";
    $scope.$parent.title = vm.title;

    vm.items = [];

    vm.url = '/components';

    vm.getItems = getItems;
    vm.doExtraAction = doExtraAction;

    function getItems() {
        function success(res) {
            console.log(res.data);
            vm.items = res.data;
        }

        function error(err) {
            console.log(err);
        }

        utilsService.getItems(vm.url).then(success, error);
    }

    function doExtraAction(event, id) {
        utilsService.doExtraAction(event, id);
    }

    $scope.actions = [
        {
            name: 'Component 1',
            state: 'comp1'
        },
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