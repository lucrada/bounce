"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entity = /** @class */ (function () {
    function Entity(x, y, velocity) {
        var _this = this;
        this.x = function () { return _this._x; };
        this.y = function () { return _this._y; };
        this.setX = function (x) { _this._x = x; };
        this.setY = function (y) { _this._y = y; };
        this._x = x;
        this._y = y;
        this._velocity = velocity;
    }
    return Entity;
}());
;
exports.default = Entity;
