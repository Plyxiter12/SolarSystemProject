/**
 * Created by Andy Thompson on 2/19/14.
 *
 *
 */
const G = 6.67e-11; //gravitational constant

var sun = {
    diameter: 1391000,
    radius: (this.diameter/2),
    mass: 0
}

/* parameters are ratios of the sun's dimensions
*  Using IAU (International Astronomical Units) when applicable
*  Mass is measured in Solar Mass of the */
function Planet(diameter, mass, distance, revolution, rotation) {
    this.diameter = (sun.diameter/diameter);

    // Using Nasa datasheet, they keep mass relative to 10**24
    this.mass = mass * 10^24;

    // Using Nasa datasheet, they keep distance relative to 10*6*
    this.distance = distance * 10^6;

    // Time taken to orbit the Sun, expressed in days
    this.revolution = revolution;

    // Time taken to rotate about itself, expressed in hours
    // Negative values indicate retrograde motion (counter-clockwise rotation)
    this.rotation = rotation;

    var radius = (this.diameter/2);
    var gravForce = ((G * this.mass * sun.mass)/(distance^2));
};

var mercury = new Planet(4879, 0.330, 57.9, 88.0, 1407.6);
var venus = new Planet( 12104, 4.87, 108.2, 224.7, -5832.5);
var earth = new Planet(12756, 5.97, 149.6, 365.2, 23.9);
var mars = new Planet(6792, 0.642, 227.9, 687.0, 24.6);
var jupiter = new Planet(142984, 1898, 778.6, 4331, 9.9);
var saturn = new Planet(120536, 658, 1433.5, 10747, 10.7);
var uranus = new Planet(51118, 86.8, 2872.5, 30589, -17.2);
var neptune = new Planet(49528, 102, 4495.1, 59800, 16.1);
var pluto = new Planet(2390, 0.0131, 5870.0, 90588, -153.3);

var planetArray = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
