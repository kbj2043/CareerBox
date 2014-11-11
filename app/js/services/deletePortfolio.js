/**
 * Created by gimbyeongjin on 14. 11. 11..
 */

define(['app','services/serverURL'], function(app, serverURL) {
    app.factory('deletePortfolio', function () {
        return function ($http, data, callback) {
            console.log(data);
            $http({
                method: 'DELETE',
                url: serverURL + '/portfolio',
                data: data,
                responseType: 'json',
                withCredentials: true
            }).success(function (data) {
                callback(data.returnCode);
            });
        }
    });
});