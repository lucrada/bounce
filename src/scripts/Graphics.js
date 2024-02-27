"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Graphics = /** @class */ (function () {
    function Graphics() {
        var _this = this;
        this.objects = [];
        this.canvas = null;
        this.setCanvas = function (canvas) { _this.canvas = canvas; };
        this.addObject = function (obj) { _this.objects.push(obj); };
        this.renderObjects = function () {
            if (_this.canvas === null) {
                console.error('Canvas is not initialized\nUse setCanvas(canvas: HTMLCanvasElement) to initialize canvas');
                return;
            }
            var ctx = _this.canvas.getContext('2d');
            _this.objects.forEach(function (object) { return object.draw(ctx); });
        };
    }
    Graphics.instance = null;
    Graphics.getInstance = function () {
        if (Graphics.instance === null) {
            Graphics.instance = new Graphics();
        }
        return Graphics.instance;
    };
    return Graphics;
}());
;
exports.default = Graphics;
