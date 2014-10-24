/**
 * Created by gimbyeongjin on 14. 10. 24..
 */
define(['app',
    'services/serverURL'
], function(app) {
    app.factory('httpLogout', ['serverURL','$http', function (serverURL,$http) {
        return function (callback) {
            $http.get(serverURL + '/member/logout')
                .success(function (data) {
                    callback(data);
                });
        }
    }]);
});