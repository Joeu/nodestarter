angular.module('nodestarter').controller('homeController', function ($rootScope, $scope) {

    $scope.title = "Node Starter";
    $scope.$parent.title = $scope.title;

    $scope.actions = [
        {
            name: 'Components Mng',
            state: 'compMng'
        },
        {
            name: 'Component1',
            state: 'comp1'
        },
        {
            name: 'Component2',
            state: 'comp2'
        }
    ];

});