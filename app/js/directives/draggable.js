/**
 * Created by gimbyeongjin on 14. 10. 18..
 */

define([
    'app', 'jquery-ui'
], function (app) {
    app.directive('draggable', function () {
        return {
            // A = attribute, E = Element, C = Class and M = HTML Comment
            restrict: 'A',

            //The link function is responsible for registering DOM listeners as well as updating the DOM.
            link: function (scope, element) {
                element.draggable({
                    helper: 'original',    // 객체를 복사
                    cursor: 'move',     //
                    tolerance: 'fit',   //
                    containment: '.template-area'    // 드롭되지 않으면 다시 돌아옴.
                });
            }
        };
    });
});
