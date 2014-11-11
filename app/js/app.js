/**
 * Created by careerBox on 2014-10-18.
 */
define([
    'angular',
    'angular-route',
    'twitter-bootstrap',
    'angular-bootstrap',
    'kendo'
], function (ng) {
    'use strict';

    return ng.module('myApp', ['kendo.directives', 'ui.bootstrap']);
});