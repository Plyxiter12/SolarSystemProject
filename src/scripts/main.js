/**
 * Created by Andy Thompson on 11/7/2014.
 */
'use strict';

var MainView = function() {
    var self = this;

    self.status = ko.observable('active');
    self.planets = ko.observableArray([
        {id: 0, name: 'sun', imgsrc: '/src/images/sun.png', size: '100px'},
        {id: 1, name: 'mercury', imgsrc: '/src/images/mercury.png', size: '100px'},
        {id: 2, name: 'venus', imgsrc: '/src/images/venus.png', size: '100px'},
        {id: 3, name: 'earth', imgsrc: '/src/images/earth.png', size: '100px'},
        {id: 4, name: 'mars', imgsrc: '/src/images/mars.png', size: '100px'},
        {id: 5, name: 'jupiter', imgsrc: '/src/images/jupiter.png', size: '100px'},
        {id: 6, name: 'saturn', imgsrc: '/src/images/saturn.png', size: '100px'},
        {id: 7, name: 'uranus', imgsrc: '/src/images/uranus.png', size: '100px'},
        {id: 8, name: 'neptune', imgsrc: '/src/images/neptune.png', size: '100px'},
        {id: 9, name: 'pluto', imgsrc: '/src/images/pluto.png', size: '100px'}
    ]);
};

ko.applyBindings(new MainView());