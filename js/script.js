/**
 * Created by Andy Thompson on 2/19/14.
 *
 *
 */
const G = 6.67e-11; //gravitational constant
const AU = 149597871; //in km

var sun = {
    diameter: 1391000,
    radius: (this.diameter/2),
    mass: 1.989e30
}

/* parameters are ratios of the sun's dimensions */
function Planet(diameter, mass, distance) {
    this.diameter = (sun.diameter/diameter);
    this.mass = (sun.mass/mass);
    this.distance = (AU*distance);

    var radius = (this.diameter/2);
    var gravForce = function(Planet) {

    }
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

var planetList = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];

var gravForce = function(planet1, planet2) {

}
