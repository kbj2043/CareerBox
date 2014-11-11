/**
 * Created by gimbyeongjin on 14. 11. 11..
 */

define(['app','services/serverURL'], function(app, serverURL) {
    app.factory('createPortfolio', function () {
        return function ($http, data, callback) {
            console.log(data);
            $http({
                method: 'POST',
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