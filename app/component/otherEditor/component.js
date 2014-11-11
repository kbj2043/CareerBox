
define([
    'app',
    'kendo'
], function (app, kendo) {

//    var menuItems = ['정보관리', '포트폴리오', '지원서'];

    app.controller('otherEditor', function ($scope, kendo) {
//        $scope.menuItems = menuItems;
        $scope.hello = "Hello from Controller!";
    });

    app.directive('otherEditor', function () {
        return {
            restrict: 'E',
            templateUrl: require.toUrl('component/otherEditor/template.html')
        };
    });

});