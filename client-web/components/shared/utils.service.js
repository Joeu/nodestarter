'use strict';

angular
    .module('nodestarter')
    .service('utilsService', utilsService);

function utilsService($mdDialog) {
    var vm = this;
    vm.doExtraAction = doExtraAction;

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