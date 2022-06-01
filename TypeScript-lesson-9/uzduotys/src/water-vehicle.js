"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_js_1 = __importDefault(require("./vehicle.js"));
class WaterVehicle extends vehicle_js_1.default {
    constructor({ maxDepth }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tmaksimalus gylis: ${this.maxDepth}`;
        };
        this.maxDepth = maxDepth;
    }
}
exports.default = WaterVehicle;
