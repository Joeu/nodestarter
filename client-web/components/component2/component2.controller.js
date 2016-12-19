'use strict';

angular
    .module('nodestarter')
    .controller('component2controller', component2controller);

function component2controller($scope, component2service, utilsService) {
    var vm = this;

    vm.title = "Component 2";
    $scope.$parent.title = vm.title;

    vm.items = [];

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

        component2service.getItems().then(success, error);
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
            name: 'Components Mng',
            state: 'compMng'
        },
        {
            name: 'Home',
            state: 'home'
        }
    ];

}