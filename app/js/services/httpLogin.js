/**
 * Created by gimbyeongjin on 14. 10. 24..
 */
define(['app',
    'services/serverURL'
], function(app) {
    app.factory('httpLogin', ['serverURL','$http', function (serverURL,$http) {
        return function (callback, email, password) {
            $http.post(serverURL + '/member/login', { 'email': email, 'password': password })
                .success(function (data) {
                    callback(data);
                })
                .error(function(data, status, headers, config) {
                    data.returnCode = 'error';
                    callback(data);
                });
        }
    }]);
});
