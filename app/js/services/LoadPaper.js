/**
 * Created by JEONGBORAM-PC-W1 on 2014-10-24.
 */
define(['app'], function(app) {
    app.factory('LoadPaper', function () {
        return function ($http, callback) {
            $http({
                method: 'GET',
                url: 'http://210.118.74.166:8123/paper',
                responseType: 'json',
                withCredentials: true
            }).success(function (data) {
                callback(data);
            });
        }
    });
});
