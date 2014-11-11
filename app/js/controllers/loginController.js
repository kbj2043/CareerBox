/**
 * Created by gimbyeongjin on 14. 10. 23..
 */

define([
    'jquery',
    'angular',
    'app',
    'services/httpLogin',
    'services/memberCallback'

], function(
    $,
    ng,
    app
    ) {
    app.controller('loginController', ['$scope', 'httpLogin', 'memberCallback', '$window', function ($scope, httpLogin, memberCallback, $window) {
        $scope.errors = [];
        $scope.msgs = [];

        $scope.login = function () {
            $scope.errors.splice(0, $scope.errors.length); // remove all error messages
            $scope.msgs.splice(0, $scope.msgs.length);

            httpLogin($scope.callback,$scope.userEmail, $scope.userPassword);
        };

        $scope.callback = function(data){

            var href = "portfolioManage.html";

            memberCallback($window, $scope, data, href);

        };
    }]);
});