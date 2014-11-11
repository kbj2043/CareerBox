/**
 * Created by gimbyeongjin on 14. 11. 11..
 */
define(['app','services/serverURL'], function(app, serverURL) {
    app.factory('getPortfolioList', function () {
        return function ($http, callback) {
            $http({
                method: 'GET',
                url: 'http://210.118.74.166:8123/portfolio',
                responseType: 'json',
                withCredentials: true
            })
                .success(function (data) {
                    callback(data);
                })
                .error(function(data) {
                    data.returnCode = 'error';
                    callback(data);
                });
        }
    });
});