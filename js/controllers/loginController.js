/**
 * Created by gimbyeongjin on 14. 10. 23..
 */

define([
    'jquery',
    'angular',
    'app',
    'services/DealWithMemberReturn',
    'services/httpLogin'
], function(
    $,
    ng,
    app
    ) {
    app.controller('loginController', ['$scope', 'httpLogin', 'DealWithMemberReturn', function ($scope, httpLogin, DealWithMemberReturn) {
        $scope.errors = [];
        $scope.msgs = [];

        $scope.login = function () {
            $scope.errors.splice(0, $scope.errors.length); // remove all error messages
            $scope.msgs.splice(0, $scope.msgs.length);

            httpLogin($scope.callback,$scope.userEmail, $scope.userPassword);
        };

        $scope.callback = function(data){
            DealWithMemberReturn($scope, data, "editor.html");
        };
    }]);
});