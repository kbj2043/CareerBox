/*global describe beforeEach it expect */

define([
    'app',
    'angularMocks', // 반드시 주입해주어야함.
    'controllers/editorController'
], function() {
    'use strict';

    describe('editorController', function(){
        var editorController, scope;

        beforeEach(module('myApp'));

        beforeEach(inject(['$rootScope', '$controller', function($rootScope, $controller) {
            scope = $rootScope.$new();
            editorController = $controller('editorController', {
                $scope: scope
            });
        }]));

        it('should have a editorController', function() {
            expect(editorController).not.toEqual(null); // editorController라는 컨트롤러가 있는가?
        });
    });

});