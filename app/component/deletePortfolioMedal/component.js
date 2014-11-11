
define([
    'app'
], function (app) {

    app.controller('deletePortfolioMedalController', function ($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    });

    return {
        templateUrl: require.toUrl('component/deletePortfolioMedal/template.html'),
        controller: 'deletePortfolioMedalController'
    }
});