/**
 * Created by JEONGBORAM-PC-W1 on 2014-10-24.
 */
define(['app'], function(app) {
    app.factory('SavePaper', function () {
        return function ($http, data, callback) {
            console.log(data);
            $http({
                method: 'POST',
                url: 'http://210.118.74.166:8123/paper',
                data: {itemDao: data},
                responseType: 'json'
            }).success(function (data) {
                callback(data.returnCode);
            });
        }
    });
});
