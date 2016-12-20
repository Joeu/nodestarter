'use strict';

angular
    .module('nodestarter')
    .controller('component1controller', component1controller);

function component1controller($scope, component1service, utilsService) {
    var vm = this;

    vm.title = "Component 1";
    $scope.$parent.title = vm.title;

    vm.items = [];
    vm.getItems = getItems;
    vm.saveItem = saveItem;
    vm.doExtraAction = doExtraAction;

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

    function saveItem(item) {
        function success(res) {
            console.log(res);
            // vm.items.push(res.data);
        }

        function error(err) {
            console.log(err);
        }

        component1service.saveItem(item).then(success, error);
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