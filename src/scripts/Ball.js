"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __importDefault(require("./Entity"));
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball(x, y, radius, color) {
        if (radius === void 0) { radius = 10; }
        if (color === void 0) { color = 'red'; }
        var _this = this;
        var initVelocity = { x: 0, y: 0 };
        _this = _super.call(this, x, y, initVelocity) || this;
        _this.radius = function () { return _this._radius; };
        _this.color = function () { return _this._color; };
        _this.setRadius = function (radius) { _this._radius = radius; };
        _this.setColor = function (color) { _this._color = color; };
        _this.draw = function (ctx) {
            if (ctx === null) {
                console.error('ctx is null');
                return;
            }
            ctx.fillStyle = _this._color;
            ctx.beginPath();
            ctx.arc(_this._x, _this._y, _this._radius, 0, 2 * Math.PI, false);
            ctx.fill();
        };
        _this._radius = radius;
        _this._color = color;
        return _this;
    }
    return Ball;
}(Entity_1.default));
;
exports.default = Ball;
