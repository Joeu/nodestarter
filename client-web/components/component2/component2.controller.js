'use strict';

angular
    .module('nodestarter')
    .controller('component2controller', component2controller);

function component2controller($scope, utilsService) {
    var vm = this;

    vm.title = "Component 2";
    $scope.$parent.title = vm.title;

    vm.items = [];

    vm.url = '/component2';

    vm.getItems = getItems;
    vm.saveItem = saveItem;
    vm.deleteItem = deleteItem;
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

    function saveItem(item) {
        function success(res) {
            console.log(res);
            // vm.items.push(res);
        }

        function error(err) {
            console.log(err);
        }

        utilsService.saveItem(vm.url, item).then(success, error);
    }

    function deleteItem(id) {
        function success(res) {
            vm.items = res.data;
        }

        function error(err) {
            console.log(err);
        }

        utilsService.deleteItem(vm.url, id).then(success, error);
    }

    function doExtraAction(event, id) {
        utilsService.doExtraAction(event, id);
    }

    $scope.actions = [
        {
            name: 'Create Item',
            state: 'comp2.createItem'
        },
        {
            name: 'Component 1',
            state: 'comp1'
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