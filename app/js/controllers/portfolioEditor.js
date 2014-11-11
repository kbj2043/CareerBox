define([
    'jquery',
    'angular',
    'app'
], function ($, ng, app) {
    app.controller('portfolioEditor', ['$scope', '$http', function ($scope) {
        $(document).ready(function () {
            console.log('load');

            $scope.orientation = "horizontal"
            $scope.panes = [
                {collapsible: true, size: "300px"},
                {collapsible: false},
                {collapsible: true, size: "300px"}
            ];

            $('#editorTab a').click(function (e) {
                e.preventDefault()
                $(this).tab('show')
            });
        });
    }]);

});



