/**
 * Created by gimbyeongjin on 14. 10. 24..
 */

define(['app'
], function(app) {
    app.factory('memberCallback', [ function () {

        return function($window, $scope, data, href) {
            // Error
            if(data.returnCode == 'error'){
                $scope.msgs.push("서버와의 연결이 되지 않았습니다.");
            }

            // Success
            else if (data.returnCode == '000') {
                // 성공 메세지
                $scope.msgs.push("성공하였습니다.");

                // 에디터 화면으로 이동
                $window.location.href = href //"#/articleEditor";
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
        }

    }]);
});