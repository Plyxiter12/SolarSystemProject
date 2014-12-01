/**
 * Created by Andy Thompson on 11/7/2014.
 */
'use strict';

var SolarSystemView = function() {
    var self = this;

    self.status = ko.observable('active');
    self.planets = ko.observableArray([
        {id: 0, name: 'sun', imgsrc: '/src/images/sun.png'},
        {id: 1, name: 'mercury', imgsrc: '/src/images/mercury.png'},
        {id: 2, name: 'venus', imgsrc: '/src/images/venus.png'},
        {id: 3, name: 'earth', imgsrc: '/src/images/earth.png'},
        {id: 4, name: 'mars', imgsrc: '/src/images/mars.png'},
        {id: 5, name: 'jupiter', imgsrc: '/src/images/jupiter.png'},
        {id: 6, name: 'saturn', imgsrc: '/src/images/saturn.png'},
        {id: 7, name: 'uranus', imgsrc: '/src/images/uranus.png'},
        {id: 8, name: 'neptune', imgsrc: '/src/images/neptune.png'},
        {id: 9, name: 'pluto', imgsrc: '/src/images/pluto.png'}
    ]);
};

ko.applyBindings(new SolarSystemView());