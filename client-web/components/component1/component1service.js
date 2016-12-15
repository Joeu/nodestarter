'use strict';

angular
    .module('nodestarter')
    .service('component1service', component1service);

function component1service($http) {
    var vm = this;
    vm.getItems = getItems;

    function getItems() {
        return $http.get('/component1');
    }

}