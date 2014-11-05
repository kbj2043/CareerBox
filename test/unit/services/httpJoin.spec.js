/*global describe beforeEach it expect */

define([
    'app',
    'angularMocks', // 반드시 주입해주어야함.
    'services/httpJoin'
], function() {
    'use strict';

    describe('httpJoin', function(){
        var $httpBackend;

        beforeEach(inject(function($injector) {
            // Set up the mock http service responses
            $httpBackend = $injector.get('$httpBackend');
        }));

        it('should send msg to server', function() {

            $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
            $httpBackend.flush();

        });

        var httpJoin;

        beforeEach(module('myApp'));

        it('should contain an $appStorage service',
            inject(function($httpJoin) {
                expect($httpJoin).not.toEqual(null);
            })
        );

        beforeEach(inject(['$service', function($service) {
            httpJoin = $service('httpJoin', {
                $scope: scope
            });
        }]));

        it('should have a httpJoin', function() {
            expect(httpJoin).not.toEqual(null); // joinController 컨트롤러가 있는가?
        });

        it('모두 제대로 된 경우 : 아이디는 kbj7353@naver.com 비밀번호는 123456 ', function() {

            // input : email, password
            // output : data

            expect(joinController).not.toEqual(null); // joinController 컨트롤러가 있는가?
        });
    });

});