/**
 * Created by osila_000 on 1/20/2015.
 */
define(['pixi'], function(pixi){
    'use strict';

    var CanvasObject = function(name) {
        var self = this;

        var imgRoot = '/src/data/images/';
        var imgFormat = '.png';

        self.name = name;
        self.img = imgRoot + name + imgFormat;
        self.texture = pixi.Texture.fromImage(self.img);
        self.sprite = new pixi.Sprite.fromImage(self.img);

    };

    return CanvasObject;
});