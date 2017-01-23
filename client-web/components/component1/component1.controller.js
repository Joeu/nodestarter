'use strict';

angular
    .module('nodestarter')
    .controller('component1controller', component1controller);

function component1controller($scope, utilsService) {
    var vm = this;

    vm.title = "Component 1";
    $scope.$parent.title = vm.title;

    vm.items = [];

    vm.url = '/component1';

    vm.getItems = getItems;
    vm.saveItem = saveItem;
    vm.deleteItem = deleteItem;
    vm.doExtraAction = doExtraAction;

    function getItems() {
        function success(res) {
            vm.items = res.data;
        }

        function error(err) {
            console.log(err);
        }

        utilsService.getItems(vm.url).then(success, error);
    }

    function saveItem(item) {
        function success() {
            getItems();
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
            state: 'comp1.createItem'
        },
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