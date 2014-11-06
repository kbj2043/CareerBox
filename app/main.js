/**
 * Created by careerBox on 2014-10-18.
 */

require.config({
    baseUrl: '../js',

    paths: {
        'angular': '../libs/angular/angular',
        'angular-route': '../libs/angular/angular-route',
        'jquery': '../libs/jquery/jquery.min',
        'jquery-ui': '../libs/jquery/jquery-ui.min',
        'domReady': '../libs/require/domReady',
        'component': '../component',
        'twitter-bootstrap': '../libs/bootstrap/bootstrap.min',
        'kendo.core' : '../libs/kendo/js/kendo.core.min',
        'kendo.userevents' : '../libs/kendo/js/kendo.userevents.min',
        'kendo.draganddrop' : '../libs/kendo/js/kendo.draganddrop.min',
        'kendo.resizable' : '../libs/kendo/js/kendo.resizable.min',
        'kendo.splitter' : '../libs/kendo/js/kendo.core.splitter.min'
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
        },

        'twitter-bootstrap': {
            deps: ['jquery'],
            exports: 'twitter-bootstrap'
        }
    }
});

require([
    'jquery'
], function ($) {

    var cntl = $('body').attr('ng-controller');

    require(['bootstrap', 'controllers/' + cntl
    ], function () {
    });
});