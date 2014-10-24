/**
 * Created by careerBox on 2014-10-18.
 */

require.config({
    baseUrl: './js',

    paths: {
        'angular': '../libs/angular/angular',
        'angular-route': '../libs/angular/angular-route',
        'jquery': '../libs/jquery/jquery.min',
        'jquery-ui':'../libs/jquery/jquery-ui.min',
        'domReady': '../libs/require/domReady',
        'component': '../component'
    },

    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },

        'angular-route': {
            deps: ['angular'],
            exports: 'ngRoute'
        },

        'jquery-ui': {
            deps: ['jquery'],
            exports: 'jquery-ui'
        }
    }
});

require([
    'jquery'
], function ($) {

    var cntl = $('body').attr('ng-controller');

    require([
        'bootstrap',
        'controllers/' + cntl
    ], function () {
    });
});