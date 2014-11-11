
define([
    'app'
], function (app) {

    app.controller('modifyPortfolioMedalController', function ($scope, $modalInstance) {

        $scope.portfolio = {title : null, description : null};

        $scope.ok = function () {
            $modalInstance.close($scope.portfolio);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    });

    return {
        templateUrl: require.toUrl('component/modifyPortfolioMedal/template.html'),
        controller: 'modifyPortfolioMedalController'
    }
});