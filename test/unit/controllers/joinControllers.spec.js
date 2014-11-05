/*global describe beforeEach it expect */

define([
    'app',
    'angularMocks', // 반드시 주입해주어야함.
    'controllers/joinController'
], function() {
    'use strict';

    describe('joinController', function(){
        var joinController, scope;

        beforeEach(module('myApp'));

        beforeEach(inject(['$rootScope', '$controller', function($rootScope, $controller) {
            scope = $rootScope.$new();
            joinController = $controller('joinController', {
                $scope: scope
            });
        }]));

        it('should have a joinController', function() {
            expect(joinController).not.toEqual(null); // joinController 컨트롤러가 있는가?
        });

        it('모두 제대로 된 경우 : 아이디는 kbj7353@naver.com 비밀번호는 123456 ', function() {
            expect(joinController).not.toEqual(null); // joinController 컨트롤러가 있는가?
        });
    });

});