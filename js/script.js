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

var mercury = new Planet("mercury", 4879, 0.330, 57.9, 88.0, 1407.6),
    venus =  new Planet("venus", 12104, 4.87, 108.2, 224.7, -5832.5),
    earth = new Planet("earth", 12756, 5.97, 149.6, 365.2, 23.9),
    mars = new Planet("mars", 6792, 0.642, 227.9, 687.0, 24.6),
    jupiter = new Planet("jupiter", 142984, 1898, 778.6, 4331, 9.9),
    saturn = new Planet("saturn", 120536, 658, 1433.5, 10747, 10.7),
    uranus = new Planet("uranus", 51118, 86.8, 2872.5, 30589, -17.2),
    neptune = new Planet("neptune", 49528, 102, 4495.1, 59800, 16.1),
    pluto = new Planet("pluto", 2390, 0.0131, 5870.0, 90588, -153.3);

var planetArray = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto];

/* parameters are ratios of the sun's dimensions
 *  Using IAU (International Astronomical Units) when applicable
 *  Mass is measured in Solar Mass of the */
function Planet(name, diameter, mass, distance, revolution, rotation) {
    //used to call the name of the planet
    this.name = name;

    this.diameter = (sun.diameter/diameter);

    // Using Nasa datasheet, they keep mass relative to 10**24
    this.mass = mass;

    // Using Nasa datasheet, they keep distance relative to 10*6
    this.distance = distance;

    // Time taken to orbit the Sun, expressed in days
    this.revolution = revolution;

    // Time taken to rotate about itself, expressed in hours
    // Negative values indicate retrograde motion (counter-clockwise rotation)
    this.rotation = rotation;

    var radius = (this.diameter/2);
    var gravForce = ((G * this.mass * sun.mass)/(distance^2));
};

window.onload = function() {
    var mercuryImg = document.getElementById("mercury"),
        venusImg = document.getElementById("venus"),
        earthImg = document.getElementById("earth"),
        marsImg = document.getElementById("mars"),
        jupiterImg = document.getElementById("jupiter"),
        saturnImg = document.getElementById("saturn"),
        uranusImg = document.getElementById("uranus"),
        neptuneImg = document.getElementById("neptune"),
        plutoImg = document.getElementById("pluto"),
        sunImg = document.getElementById("sun");

    var planetImgArray = [mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg, plutoImg];

    setImgDimensionsandPosition();

    function setImgDimensionsandPosition() {
        for(var i = 0; i < planetImgArray.length; i++){
            var planetImgDimension = (sunImg.width / planetArray[i].diameter);
            if(planetImgArray[i] && planetImgArray[i].style) {
                planetImgArray[i].style.width = round(planetImgDimension, 0) + 'px';
                planetImgArray[i].style.height = round(planetImgDimension, 0) + 'px';
                planetImgArray[i].style.marginLeft = -Math.ceil(planetImgArray[i].height/2) + 'px';
                planetImgArray[i].style.marginTop = -Math.ceil(planetImgArray[i].height/2) + 'px';
                console.log(planetImgArray[i].style.width);
            }
        }
    }

    function round(num, places) {
        var multiplier = Math.pow(10, places);
        return Math.round(num * multiplier) / multiplier;
    }

}