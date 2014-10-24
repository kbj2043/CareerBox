/**
 * Created by gimbyeongjin on 14. 10. 24..
 */
define([
    'jquery',
    'angular',
    'app',
    'services/httpJoin'
], function(
    $,
    ng,
    app
    ) {
    app.controller('joinController',['$scope', 'httpJoin', function ($scope, httpJoin) {
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

            // Success
            if (data.returnCode == '000') {
                // 성공 메세지
                $scope.msgs.push("성공하였습니다.");

                // 에디터 화면으로 이동
                location.href = href //"#/articleEditor";
            }

            // Invalid Arguments
            else if (data.returnCode == '001') {
                // 오류 발생 메세지
                $scope.msgs.push("오류 발생");
            }

            // Not Login
            else if (data.returnCode == '002') {
                // 로그인 안됬다. 메세지
                $scope.msgs.push("로그인이 안되어있습니다.");

                // 로그인 시도
            }

            // Incorrect ID or PW
            else if (data.returnCode == '101') {
                // 잘못된 형식의 아이디이거나 패스워드라는 메세지
                $scope.msgs.push("잘못된 형식의 아이디이거나 패스워드입니다.");

            }

            // Exist Email
            else if (data.returnCode == '102') {
                // 이미 존재하는 이메일이라는 메세지
                $scope.msgs.push("이미 존재하는 이메일입니다.");

            };
        };

    }])
});