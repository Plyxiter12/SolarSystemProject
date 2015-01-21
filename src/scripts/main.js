/**
 * Created by osila_000 on 1/6/2015.
 */
'use strict';

require.config({
    paths: {
        'jquery': '../lib/jquery',
        'knockout': '../lib/knockout',
        'underscore': '../lib/underscore',
        'pixi': '../lib/pixi.dev'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'knockout': {
            exports: 'ko'
        },
        'underscore': {
            exports: '_'
        },
        'pixi': {
            exports: 'PIXI'
        }
    }
});

require(['knockout', 'app'], function(ko, App) {
    ko.applyBindings(new App());
});

