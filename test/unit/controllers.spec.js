/*global describe beforeEach it expect */

define([
    'angular',
    'angularMocks',
    'controllers/editorController'
], function(angular, mocks, editorController) {
    'use strict';

    describe('MyCtrl1', function(){
        var MyCtrl1, scope;

        beforeEach(function() {
            mocks.module('editorController');
            mocks.inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                MyCtrl1 = $controller('MyCtrl1', {
                    $scope: scope
                });
            });
        });
    });

    describe('MyCtrl2', function(){
        //...
    });
});