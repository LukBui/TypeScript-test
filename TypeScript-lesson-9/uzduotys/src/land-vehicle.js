"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_js_1 = __importDefault(require("./vehicle.js"));
class LandVehicle extends vehicle_js_1.default {
    constructor({ tires }, vehicleProps) {
        super(vehicleProps);
        this.toString = () => {
            return `${this.getString()}\tpadangos: ${this.tires.join(', ')}`;
        };
        this.tires = tires;
    }
}
exports.default = LandVehicle;
