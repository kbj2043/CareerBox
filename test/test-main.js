var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        'angular': 'app/libs/angular/angular',
        'angular-route': 'app/libs/angular/angular-route',
        'jquery': 'app/libs/jquery/jquery.min',
        'jquery-ui':'app/libs/jquery/jquery-ui.min',
        'domReady': 'app/libs/require/domReady',
        'component': 'app/component',
        'twitter-bootstrap':'app/libs/bootstrap/bootstrap.min',
        'angularMocks': 'app/libs/angular/angular-mocks'
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
        },

        'angularMocks': {
            deps:['angular'],
            'exports':'angularMocks'
        }
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
