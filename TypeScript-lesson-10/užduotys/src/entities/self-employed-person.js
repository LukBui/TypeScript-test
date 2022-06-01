"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_js_1 = __importDefault(require("./employee.js"));
const format_line_js_1 = __importDefault(require("../helpers/format-line.js"));
class SelfEmployedPerson extends employee_js_1.default {
    constructor(_a) {
        var { hourPay, hoursWorked = 0 } = _a, personProps = __rest(_a, ["hourPay", "hoursWorked"]);
        super(personProps);
        this.calcPay = () => this.hourPay * this.hoursWorked;
        this.hourPay = hourPay;
        this.hoursWorked = hoursWorked;
    }
    toString() {
        return `${this.getPersonInfo()
            + (0, format_line_js_1.default)(`hour pay: ${this.hourPay}`, 1)
            + (0, format_line_js_1.default)(`hours worked: ${this.hoursWorked}`, 1)}\n`;
    }
}
exports.default = SelfEmployedPerson;
