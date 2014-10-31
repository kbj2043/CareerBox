/**
 * Created by gimbyeongjin on 14. 10. 24..
 */
define(['app',
    'services/serverURL'
], function(app) {
    app.factory('httpLogin', ['serverURL','$http', function (serverURL,$http) {
        return function (callback, email, password) {
            $http.post(serverURL + '/member/login', { 'email': email, 'password': password }
	        ,{withCredentials: true}
            ).success(function (data) {
                    callback(data);
                });
        }
    }]);
});
