'use strict';

angular
    .module('nodestarter')
    .service('componentsService', componentsService);

function componentsService($http) {
    var vm = this;
    vm.getItems = getItems;

    function getItems() {
        return $http.get('/components');
    }

}