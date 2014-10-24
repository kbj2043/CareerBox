/**
 * Created by gimbyeongjin on 14. 10. 24..
 */
define([
    'jquery',
    'angular',
    'app',
    'services/httpJoin',
    'services/memberCallback'
], function(
    $,
    ng,
    app
    ) {
    app.controller('joinController',['$scope', 'httpJoin', 'memberCallback', function ($scope, httpJoin, memberCallback) {
        $scope.errors = [];
        $scope.msgs = [];

        $scope.join = function () {
            // 패스워드 확인
            if ($scope.userPassword != $scope.userPasswordReconfirm) {
                $scope.msgs.push("패스워드를 다시 확인해주세요.");
                return;
            }

            $scope.errors.splice(0, $scope.errors.length); // remove all error messages
            $scope.msgs.splice(0, $scope.msgs.length);

            httpJoin($scope.callback,$scope.userEmail, $scope.userPassword);

        };

        $scope.callback = function(data){
            var href = "editor.html";
            memberCallback($scope, data, href);
        };

    }])
});