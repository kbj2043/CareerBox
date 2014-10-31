/**
 * Created by gimbyeongjin on 14. 10. 24..
 */

define(['app',
    'services/serverURL'
], function(app) {
    app.factory('httpJoin', ['serverURL','$http', function (serverURL,$http) {
        return function (callback, email, password) {
            $http.post(serverURL + '/member/join', { 'email': email, 'password': password }
            ).success(function (data) {
                    callback(data);
                });
        }
    }]);
});
