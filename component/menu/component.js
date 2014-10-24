define(['app'], function (app) {

    var menuItems = ['정보관리', '포트폴리오', '지원서'];

    app.controller('menu', function ($scope) {
        $scope.menuItems = menuItems;
    });

    app.directive('menu', function () {
        return {
            restrict: 'E',
            templateUrl: require.toUrl('component/menu/template.html')
        };
    });

});