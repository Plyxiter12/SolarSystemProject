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
    this.mass = mass;
    this.distance = distance;
    this.revolution = revolution;
    this.rotation = rotation;

    var radius = (this.diameter/2);
    var gravForce = ((G * this.mass * sun.mass)/(distance^2));
};

var mercury = new Planet();
var venus = new Planet();
var earth = new Planet();
var mars = new Planet();
var jupiter = new Planet();
var saturn = new Planet();
var uranus = new Planet();
var neptune = new Planet();
var pluto = new Planet();

var planetArray = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];
