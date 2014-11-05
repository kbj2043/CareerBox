var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/i.test(file)) {
            tests.push(file);
        }
    }
}

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/app/js',

    paths: {
        'angular': '/base/app/libs/angular/angular',
        'angular-route': '/base/app/libs/angular/angular-route',
        'jquery': '/base/app/libs/jquery/jquery.min',
        'jquery-ui':'/base/app/libs/jquery/jquery-ui.min',
        'domReady': '/base/app/libs/require/domReady',
        'component': '/base/app/component',
        'twitter-bootstrap':'/base/app/libs/bootstrap/bootstrap.min',
        'angularMocks': '/base/app/libs/angular/angular-mocks'
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
    deps: tests,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
