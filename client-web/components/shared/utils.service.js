'use strict';

angular
    .module('nodestarter')
    .service('utilsService', utilsService);

function utilsService($mdDialog, $http) {
    var vm = this;
    vm.doExtraAction = doExtraAction;

    vm.getItems = getItems;
    vm.saveItem = saveItem;
    vm.deleteItem = deleteItem;

    function getItems(url) {
        return $http.get(url);
    }

    function saveItem(url, item) {
        return $http.post(url, item);
    }

    function deleteItem(url, id) {
        return $http.delete(url +'/'+ id);
    }

    function doExtraAction(event, id) {
        $mdDialog.show(
            $mdDialog.alert()
                .title('Extra Action')
                .textContent('Id: ' + id)
                .ariaLabel('Extra Action')
                .ok('Ok!')
                .targetEvent(event)
        );
    }

}