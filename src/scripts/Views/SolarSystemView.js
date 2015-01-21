/**
 * Created by osila_000 on 1/18/2015.
 */
define([
    'jquery',
    'pixi',
    'Models/CanvasObject'
], function($, pixi, CanvasObject) {
    'use strict';

    var SolarSystemView = function() {
        var self = this;

        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var stage = new pixi.Stage;


        var canvasObjectList =
            [
                'sun',
                'mercury',
                'venus',
                'earth',
                'mars',
                'jupiter',
                'saturn',
                'uranus',
                'neptune',
                'pluto'
            ];

        self.initialize = function() {

            //autodetect what renderer to use (webgl vs canvas)
            var renderer = pixi.autoDetectRenderer(windowWidth, windowHeight);

            $('.solar-system-canvas').append(renderer.view);

            requestAnimFrame(animate);

            drawObjects();

            function animate() {
                renderer.render(stage);

                requestAnimationFrame(animate);
            }
        };

        function drawObjects() {
            var objectHeight = 200;
            var objectWidth = 200;
            var spacing = 10;
            var objects = createCanvasObjects();

            for(var i =0; i<canvasObjectList.length; i++){

                var sprite = objects[i].sprite;

                sprite.height = objectHeight;
                sprite.width = objectWidth;

                sprite.anchor.x = 0.5;
                sprite.anchor.y = 0.5;

                sprite.position.x = 200 * i + spacing;
                sprite.position.y = windowHeight/2;

                stage.addChild(sprite);

                console.log(sprite.position.x);
                console.log(sprite);
            }
        }

        //create solar system objects

        function createCanvasObjects() {
            var canvasObjects = [];

            for(var i = 0; i<canvasObjectList.length; i++){
                var co = new CanvasObject(canvasObjectList[i]);
                canvasObjects.push(co);
            }

            return canvasObjects;
        }
    };

    return new SolarSystemView();

});