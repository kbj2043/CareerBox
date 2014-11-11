
define([
    'app'
], function (app) {

    app.controller('createPortfolioMedalController', function ($scope, $modalInstance) {

        $scope.portfolio = {_id: 'danger', title : 'title', description : 'description', date : new Date(), pages : []};
        $scope.pages = {size : 3};

        $scope.ok = function () {
            for(var i = 0; i<$scope.pages.size ; i++){
                $scope.portfolio.pages.push(new Object);
            }

            $modalInstance.close($scope.portfolio);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss();
        };
    });

    return {
        templateUrl: require.toUrl('component/createPortfolioMedal/template.html'),
        controller: 'createPortfolioMedalController'
    }
});