/*global describe beforeEach it expect */
'use strict';
define([
    'directives/tmplDraggable'
], function() {


    describe('directives', function() {
        var $compile, $rootScope;

        beforeEach(angular.mock.module('myApp'));

        beforeEach(inject(
            ['$compile','$rootScope', function($c, $r) {
                $compile = $c;
                $rootScope = $r;
            }]
        ));

        it("should display the welcome text properly", function() {
            var element = $compile('<div tmpl-draggable>User</div>')($rootScope);
            expect(element.html()).toEqual('User');
        })

    });
});
