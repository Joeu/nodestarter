'use strict';

angular
    .module('nodestarter')
    .service('component1service', component1service);

function component1service($http) {
    var vm = this;
    vm.getItems = getItems;
    vm.saveItem = saveItem;

    function getItems() {
        return $http.get('/component1');
    }

    function saveItem(item) {
        return $http.post('/component1', item);
    }

}