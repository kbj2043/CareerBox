define([
    'jquery',
    'angular',
    'app',
    'kendo.core',
    'kendo.userevents',
    'kendo.draganddrop',
    'kendo.resizable',
    'kendo.splitter'
], function ($, ng, app) {
    app.controller('portfolioEditor', ['$scope', '$http', function ($scope, $http) {
        $(document).ready(function() {
            console.log('load');
            $("#bottom-pane").kendoSplitter({
                orientation: "horizontal",
                panes: [
                    {collapsible: true, size: "300px"},
                    {collapsible: false},
                    {collapsible: true, size: "300px"}
                ]
            });

            $('#editorTab a').click(function (e) {
                e.preventDefault()
                $(this).tab('show')
            });
        });
    }]);
});



