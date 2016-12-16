'use strict';

angular
    .module('nodestarter')
    .service('component2service', component2service);

function component2service($http) {
    var vm = this;
    vm.getItems = getItems;

    function getItems() {
        return $http.get('/component2');
    }

}