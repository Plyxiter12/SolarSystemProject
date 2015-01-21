/**
 * Created by osila_000 on 1/6/2015.
 */
define([
    'jquery',
    'knockout',
    'pixi',
    'Views/SolarSystemView'
], function($, ko, pixi, SolarSystemView){
    'use strict';
    return function App() {
        SolarSystemView.initialize();
    };
});